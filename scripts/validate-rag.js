const assert = require("assert");
const {
    getAvailableUniversities,
    inferTypeTags,
    inferUniversityTag,
    loadRagData,
    resolveChatContext,
    retrieveContext
} = require("../backend/rag");

const data = loadRagData();

assert.strictEqual(data.rows.length, 1048, "Expected 1048 JSONL rows");
assert.strictEqual(data.universityTags.length, 18, "Expected 18 university tags");
assert.strictEqual(getAvailableUniversities(data).length, 18, "Expected 18 selectable universities");

assert.strictEqual(inferUniversityTag("Tell me about YUFL hostel", data), "YUFL");
assert.strictEqual(inferUniversityTag("What can I study at University of Information Technology?", data), "UIT");
assert.strictEqual(inferUniversityTag("How is pharmacy admission?", data), "UOP");

const topicTags = inferTypeTags("Tell me about hostel, canteen food, and fees.", data);
assert(topicTags.includes("hostel"), "Expected hostel tag inference");
assert(topicTags.includes("food"), "Expected food tag inference");
assert(topicTags.includes("fees_cost"), "Expected fees_cost tag inference");

const ytuContext = resolveChatContext({
    message: "Tell me about hostel and canteen food.",
    pageUniversityId: "ytu",
    pageUniversityTag: "YTU"
}, data);
assert.strictEqual(ytuContext.universityTag, "YTU", "Expected exact page tag retrieval");
assert(ytuContext.matchedTypeTags.includes("hostel"), "Expected hostel topic tag");
assert(ytuContext.chunks.length > 0, "Expected selected context chunks");

const inferredContext = resolveChatContext({
    message: "How is YUFL admission?",
    pageUniversityId: "tu-pyay"
}, data);
assert.strictEqual(inferredContext.universityTag, "YUFL", "Expected query-based university inference");

const changedUniversityContext = resolveChatContext({
    message: "What majors are available in NMDC?",
    pageUniversityId: "tu-pyay",
    conversationUniversityTag: "UIT",
    history: [
        { role: "user", content: "What majors are available in UIT?" },
        { role: "assistant", content: "UIT has seven specialized majors." }
    ]
}, data);
assert.strictEqual(changedUniversityContext.universityTag, "NMDC", "Expected current query university to override temporary chat university");

const followUpContext = resolveChatContext({
    message: "What about hostel?",
    pageUniversityId: "tu-pyay",
    conversationUniversityTag: "UIT",
    history: [
        { role: "user", content: "What majors are available in UIT?" },
        { role: "assistant", content: "UIT has seven specialized majors." }
    ]
}, data);
assert.strictEqual(followUpContext.universityTag, "UIT", "Expected temporary chat university for follow-up without a named university");

const choiceContext = resolveChatContext({
    message: "How is admission?",
    pageUniversityId: "tu-pyay"
}, data);
assert.strictEqual(choiceContext.needsUniversitySelection, true, "Expected university-choice fallback");
assert.strictEqual(choiceContext.universities.length, 18, "Expected 18 fallback choices");

const directRetrieval = retrieveContext("Where is Yangon University located?", "YU", { data });
assert.strictEqual(directRetrieval.universityTag, "YU");
assert(directRetrieval.contextText.includes("[YU-"), "Expected formatted source IDs in context");

const officialIntakeContext = resolveChatContext({
    message: "How many students can attend UIT in 2025 and what majors are available?",
    pageUniversityTag: "UIT"
}, data);
assert(officialIntakeContext.sources.some((source) => source.id === "UIT-INFO2025-C01"), "Expected official 2025 UIT intake source");

console.log("RAG validation passed");
console.log(`Rows: ${data.rows.length}`);
console.log(`University tags: ${data.universityTags.join(", ")}`);
