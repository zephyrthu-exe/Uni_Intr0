const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(__dirname, "..", "data", "Uni_Intro.jsonl");
const MAX_CONTEXT_CHUNKS = 8;
const MAX_CONTEXT_CHARS = 12000;

const REQUIRED_FIELDS = [
    "id",
    "university",
    "type_tags",
    "tags",
    "source_refs",
    "source_line",
    "chunk_index",
    "text"
];

const UNIVERSITY_META = Object.freeze({
    MMU: { name: "Myanmar Maritime University", aliases: ["MMU", "Myanmar Maritime University", "maritime university"] },
    NMDC: { name: "National Management Degree College", aliases: ["NMDC", "National Management Degree College", "management degree college"] },
    UCH: { name: "University of Community Health", aliases: ["UCH", "University of Community Health", "community health"] },
    UDM: { name: "University of Dental Medicine", aliases: ["UDM", "University of Dental Medicine", "Dental Medicine", "dental university"] },
    UIT: { name: "University of Information Technology", aliases: ["UIT", "University of Information Technology"] },
    UM1: { name: "University of Medicine 1", aliases: ["UM1", "University of Medicine 1", "University of Medicine One", "Medicine 1", "UM 1"] },
    UM2: { name: "University of Medicine 2", aliases: ["UM2", "University of Medicine 2", "University of Medicine Two", "Medicine 2", "UM 2"] },
    UMM: { name: "University of Medicine Mandalay", aliases: ["UMM", "University of Medicine Mandalay", "Mandalay medicine", "Medical University Mandalay", "medical universities"] },
    UMT: { name: "University of Medical Technology", aliases: ["UMT", "University of Medical Technology", "Medical Technology", "Med Tech", "medical technologist"] },
    UON: { name: "University of Nursing", aliases: ["UON", "University of Nursing", "nursing university", "nursing"] },
    UOP: { name: "University of Pharmacy", aliases: ["UOP", "University of Pharmacy", "pharmacy university", "pharmacy"] },
    UFES: { name: "University of Forestry (Yezin)", aliases: ["UFES", "University of Forestry", "University of Forestry Yezin", "University of Forestry and Environmental Science", "forestry university", "forestry"] },
    UVS: { name: "University of Veterinary Science", aliases: ["UVS", "University of Veterinary Science", "veterinary university", "veterinary"] },
    WYTU: { name: "West Yangon Technological University", aliases: ["WYTU", "West Yangon Technological University"] },
    YAU: { name: "Yezin Agricultural University", aliases: ["YAU", "Yezin Agricultural University", "Yezin Agriculture University", "Agricultural University", "agriculture university", "agricultural university"] },
    YTU: { name: "Yangon Technological University", aliases: ["YTU", "Yangon Technological University"] },
    YU: { name: "Yangon University", aliases: ["YU", "Yangon University"] },
    YUECO: { name: "Yangon University of Economics", aliases: ["YUECO", "Yangon University of Economics", "Yangon University of Economics Hlaing Campus", "Yangon University of Economics Ywa Tha Gyi Campus", "Hlaing Economics", "Ywa Tha Gyi Economics", "Ywarthagyi Economics", "economics university"] },
    YUFL: { name: "Yangon University of Foreign Languages", aliases: ["YUFL", "Yangon University of Foreign Language", "Yangon University of Foreign Languages", "foreign language university"] },
    YUOE: { name: "Yangon University of Education", aliases: ["YUOE", "YUoE", "Yangon University of Education", "education university"] }
});

const VERIFIED_PAGE_RAG_TAGS = Object.freeze({
    ytu: "YTU",
    wytu: "WYTU",
    uit: "UIT",
    mmu: "MMU",
    yu: "YU",
    um1: "UM1",
    um2: "UM2",
    ummdy: "UMM",
    "udm-yangon": "UDM",
    uch: "UCH",
    uomtygn: "UMT",
    uopygn: "UOP",
    uonygn: "UON",
    ufes: "UFES",
    uvs: "UVS",
    yau: "YAU",
    yueco: "YUECO",
    "yueco-ywathagyi": "YUECO",
    yuoe: "YUOE",
    yufl: "YUFL",
    nmdc: "NMDC"
});

const TYPE_TAG_RULES = Object.freeze([
    { tag: "hostel", keywords: ["hostel", "dorm", "dormitory", "accommodation", "အဆောင်"] },
    { tag: "food", keywords: ["food", "canteen", "cafeteria", "meal", "lunch", "စား", "အစားအစာ", "ကန်တင်း"] },
    { tag: "fees_cost", keywords: ["fee", "fees", "cost", "price", "expense", "payment", "tuition", "penalty", "compensation", "bond", "self-funded", "self funded", "mmk", "kyat", "ကြေး", "ကုန်ကျ"] },
    { tag: "cutoff_marks", keywords: ["cutoff", "cut off", "mark", "marks", "score", "admission mark", "အမှတ်"] },
    { tag: "admission", keywords: ["admission", "enter", "entrance", "accept", "accepted", "attend", "intake", "seat", "seats", "how many students", "ဝင်ခွင့်"] },
    { tag: "application_registration", keywords: ["application", "registration", "register", "form", "apply", "postal", "လျှောက်", "ဖောင်"] },
    { tag: "eligibility", keywords: ["eligible", "eligibility", "requirement", "requirements", "who can attend", "national scrutiny card", "citizen", "လိုအပ်ချက်"] },
    { tag: "major_department", keywords: ["major", "majors", "department", "departments", "specialization", "field", "program", "programs", "available majors", "မေဂျာ", "ဌာန"] },
    { tag: "curriculum_subjects", keywords: ["subject", "subjects", "curriculum", "learn", "study", "သင်ရ", "ဘာသာ"] },
    { tag: "duration", keywords: ["duration", "how long", "years", "year", "ကြာ", "နှစ်"] },
    { tag: "degree_certificate", keywords: ["degree", "certificate", "bachelor", "diploma", "ဘွဲ့", "လက်မှတ်"] },
    { tag: "career_job", keywords: ["career", "job", "work", "employment", "salary", "လုပ်ငန်း", "အလုပ်"] },
    { tag: "location_campus", keywords: ["location", "campus", "address", "where", "တည်နေရာ", "လိပ်စာ"] },
    { tag: "transport", keywords: ["transport", "bus", "commute", "ကား", "သွားလာ"] },
    { tag: "uniform_dress_code", keywords: ["uniform", "dress", "clothes", "ဝတ်စုံ"] },
    { tag: "gender_quota", keywords: ["boy", "boys", "girl", "girls", "male", "female", "quota", "ကျား", "မ"] },
    { tag: "scholarship_international", keywords: ["scholarship", "international", "abroad", "နိုင်ငံခြား", "ပညာသင်ဆု"] },
    { tag: "clubs_activities", keywords: ["club", "activity", "activities", "sport", "fresher", "event", "အသင်း", "လှုပ်ရှား"] },
    { tag: "distance_learning", keywords: ["distance", "online", "remote", "အဝေးသင်"] },
    { tag: "clinical_practical_training", keywords: ["clinical", "practical", "training", "hospital", "ward", "လက်တွေ့"] },
    { tag: "priority_transfer", keywords: ["transfer", "priority", "change university", "change major", "ပြောင်း"] },
    { tag: "exam_assessment", keywords: ["exam", "assessment", "test", "စာမေးပွဲ"] },
    { tag: "campus_facilities", keywords: ["facility", "facilities", "wifi", "wi fi", "electricity", "library", "lab", "ဓာတ်ခွဲခန်း", "စာကြည့်တိုက်"] },
    { tag: "comparison_advice", keywords: ["compare", "comparison", "choose", "better", "advice", "ရွေး", "အကြံ"] },
    { tag: "university_overview", keywords: ["overview", "about", "introduction", "what is", "အကြောင်း"] },
    { tag: "general_info", keywords: ["general", "information", "info", "detail", "အသေးစိတ်"] }
]);

const STOPWORDS = new Set([
    "the", "and", "for", "with", "about", "what", "when", "where", "which", "who", "how", "can", "could", "would",
    "should", "from", "that", "this", "there", "their", "they", "them", "you", "your", "are", "was", "were",
    "have", "has", "had", "will", "shall", "into", "onto", "than", "then", "also", "please", "tell", "give",
    "university", "school", "student", "students"
]);

let cachedData = null;

function normalizeText(value) {
    return String(value || "")
        .normalize("NFKC")
        .toLowerCase()
        .replace(/[_/\\-]+/g, " ")
        .replace(/[^\p{L}\p{N}\s.]/gu, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function keywordMatches(rawLower, normalized, keyword) {
    const normalizedKeyword = normalizeText(keyword);
    if (!normalizedKeyword) {
        return false;
    }

    if (/^[a-z0-9]{2,5}$/.test(normalizedKeyword)) {
        const boundaryPattern = new RegExp(`(^|[^a-z0-9])${escapeRegExp(normalizedKeyword)}([^a-z0-9]|$)`);
        return boundaryPattern.test(rawLower);
    }

    return normalized.includes(normalizedKeyword);
}

function tokenize(value) {
    const matches = normalizeText(value).match(/[\p{L}\p{N}]+/gu) || [];
    return [...new Set(matches.filter((token) => token.length > 2 && !STOPWORDS.has(token)))];
}

function assertArrayOfStrings(row, field, lineNumber) {
    if (!Array.isArray(row[field]) || row[field].some((item) => typeof item !== "string" || !item.trim())) {
        throw new Error(`Invalid ${field} at JSONL line ${lineNumber}`);
    }
}

function validateRow(row, lineNumber) {
    for (const field of REQUIRED_FIELDS) {
        if (!(field in row)) {
            throw new Error(`Missing ${field} at JSONL line ${lineNumber}`);
        }
    }

    if (typeof row.id !== "string" || !row.id.trim()) {
        throw new Error(`Invalid id at JSONL line ${lineNumber}`);
    }

    if (typeof row.university !== "string" || !row.university.trim()) {
        throw new Error(`Invalid university at JSONL line ${lineNumber}`);
    }

    assertArrayOfStrings(row, "type_tags", lineNumber);
    assertArrayOfStrings(row, "tags", lineNumber);
    assertArrayOfStrings(row, "source_refs", lineNumber);

    if (!row.tags.includes(row.university)) {
        throw new Error(`Row tags do not include university ${row.university} at JSONL line ${lineNumber}`);
    }

    if (!Number.isFinite(row.source_line) || !Number.isFinite(row.chunk_index)) {
        throw new Error(`Invalid source_line or chunk_index at JSONL line ${lineNumber}`);
    }

    if (typeof row.text !== "string" || !row.text.trim()) {
        throw new Error(`Invalid text at JSONL line ${lineNumber}`);
    }
}

function loadRagData(dataPath = DATA_PATH) {
    if (cachedData && dataPath === DATA_PATH) {
        return cachedData;
    }

    const content = fs.readFileSync(dataPath, "utf8");
    const rows = [];
    const rowsByUniversity = new Map();
    const typeTags = new Set();

    content.split(/\r?\n/).forEach((line, index) => {
        if (!line.trim()) {
            return;
        }

        let row;
        try {
            row = JSON.parse(line);
        } catch (error) {
            throw new Error(`Invalid JSON at JSONL line ${index + 1}: ${error.message}`);
        }

        validateRow(row, index + 1);
        rows.push(row);

        if (!rowsByUniversity.has(row.university)) {
            rowsByUniversity.set(row.university, []);
        }
        rowsByUniversity.get(row.university).push(row);
        row.type_tags.forEach((tag) => typeTags.add(tag));
    });

    const data = {
        rows,
        rowsByUniversity,
        typeTags,
        universityTags: [...rowsByUniversity.keys()].sort()
    };

    if (dataPath === DATA_PATH) {
        cachedData = data;
    }

    return data;
}

function getAvailableUniversities(data = loadRagData()) {
    return data.universityTags.map((tag) => ({
        tag,
        name: UNIVERSITY_META[tag] ? UNIVERSITY_META[tag].name : tag
    }));
}

function isKnownUniversityTag(tag, data = loadRagData()) {
    return typeof tag === "string" && data.rowsByUniversity.has(tag);
}

function inferUniversityTag(message, data = loadRagData()) {
    const rawLower = String(message || "").toLowerCase();
    const normalized = normalizeText(message);
    let best = null;

    for (const [tag, meta] of Object.entries(UNIVERSITY_META)) {
        if (!isKnownUniversityTag(tag, data)) {
            continue;
        }

        const aliases = [tag, ...(meta.aliases || [])];
        for (const alias of aliases) {
            if (!keywordMatches(rawLower, normalized, alias)) {
                continue;
            }

            const score = String(alias).toUpperCase() === tag ? 100 + String(alias).length : String(alias).length;
            if (!best || score > best.score) {
                best = { tag, score };
            }
        }
    }

    return best ? best.tag : null;
}

function inferTypeTags(message, data = loadRagData()) {
    const rawLower = String(message || "").toLowerCase();
    const normalized = normalizeText(message);

    return TYPE_TAG_RULES
        .filter((rule) => data.typeTags.has(rule.tag))
        .filter((rule) => rule.keywords.some((keyword) => keywordMatches(rawLower, normalized, keyword)))
        .map((rule) => rule.tag);
}

function resolveProvidedTag(tag, data = loadRagData()) {
    return isKnownUniversityTag(tag, data) ? tag : null;
}

function resolvePageTag(pageUniversityId, pageUniversityTag, data = loadRagData()) {
    const providedTag = resolveProvidedTag(pageUniversityTag, data);
    if (providedTag) {
        return providedTag;
    }

    const mappedTag = VERIFIED_PAGE_RAG_TAGS[String(pageUniversityId || "")];
    return resolveProvidedTag(mappedTag, data);
}

function scoreRow(row, queryTokens, matchedTypeTags) {
    const rowTypeTags = Array.isArray(row.type_tags) ? row.type_tags : [];
    const matchedTagScore = rowTypeTags.filter((tag) => matchedTypeTags.includes(tag)).length * 12;
    const haystack = normalizeText(`${row.text} ${rowTypeTags.join(" ")}`);
    const lexicalScore = queryTokens.filter((token) => haystack.includes(token)).length;

    return matchedTagScore + lexicalScore;
}

function formatContext(chunks) {
    return chunks.map((row) => {
        const sourceRefs = row.source_refs.length ? row.source_refs.join(", ") : "none";
        return [
            `[${row.id}] university=${row.university}; type_tags=${row.type_tags.join(", ")}; source_refs=${sourceRefs}; source_line=${row.source_line}; chunk_index=${row.chunk_index}`,
            row.text
        ].join("\n");
    }).join("\n\n---\n\n");
}

function retrieveContext(message, universityTag, options = {}) {
    const data = options.data || loadRagData();
    const rows = data.rowsByUniversity.get(universityTag) || [];
    const matchedTypeTags = inferTypeTags(message, data);
    const queryTokens = tokenize(message);
    const maxChunks = options.maxChunks || MAX_CONTEXT_CHUNKS;
    const maxChars = options.maxChars || MAX_CONTEXT_CHARS;
    let candidates = matchedTypeTags.length
        ? rows.filter((row) => row.type_tags.some((tag) => matchedTypeTags.includes(tag)))
        : rows;

    if (!candidates.length) {
        candidates = rows;
    }

    const ranked = candidates
        .map((row, index) => ({
            row,
            index,
            score: scoreRow(row, queryTokens, matchedTypeTags)
        }))
        .sort((left, right) => right.score - left.score || left.index - right.index);

    const selected = [];
    let usedChars = 0;

    for (const item of ranked) {
        if (selected.length >= maxChunks) {
            break;
        }

        const projectedChars = usedChars + item.row.text.length + 250;
        if (selected.length && projectedChars > maxChars) {
            continue;
        }

        selected.push(item.row);
        usedChars = projectedChars;
    }

    const chunks = selected.sort((left, right) => (
        left.source_line - right.source_line || left.chunk_index - right.chunk_index || left.id.localeCompare(right.id)
    ));

    return {
        universityTag,
        matchedTypeTags,
        chunks,
        contextText: formatContext(chunks),
        sources: chunks.map((row) => ({
            id: row.id,
            university: row.university,
            type_tags: row.type_tags,
            source_refs: row.source_refs,
            source_line: row.source_line,
            chunk_index: row.chunk_index
        }))
    };
}

function resolveChatContext(payload, data = loadRagData()) {
    const message = typeof payload.message === "string" ? payload.message.trim() : "";
    if (!message) {
        const error = new Error("Message is required.");
        error.statusCode = 400;
        throw error;
    }

    if (message.length > 1200) {
        const error = new Error("Message is too long.");
        error.statusCode = 400;
        throw error;
    }

    const retrievalQuery = typeof payload.retrievalQuery === "string" && payload.retrievalQuery.trim()
        ? payload.retrievalQuery.trim().slice(-2200)
        : message;

    const selectedUniversityTag = payload.selectedUniversityTag
        ? resolveProvidedTag(payload.selectedUniversityTag, data)
        : null;

    if (payload.selectedUniversityTag && !selectedUniversityTag) {
        const error = new Error("Selected university tag is not available in the JSONL data.");
        error.statusCode = 400;
        throw error;
    }

    const conversationUniversityTag = payload.conversationUniversityTag
        ? resolveProvidedTag(payload.conversationUniversityTag, data)
        : null;

    if (payload.conversationUniversityTag && !conversationUniversityTag) {
        const error = new Error("Conversation university tag is not available in the JSONL data.");
        error.statusCode = 400;
        throw error;
    }

    const currentMessageUniversityTag = inferUniversityTag(message, data);

    const universityTag =
        selectedUniversityTag ||
        resolvePageTag(payload.pageUniversityId, payload.pageUniversityTag, data) ||
        currentMessageUniversityTag ||
        conversationUniversityTag;

    if (!universityTag) {
        return {
            needsUniversitySelection: true,
            universities: getAvailableUniversities(data)
        };
    }

    return retrieveContext(retrievalQuery, universityTag, { data });
}

module.exports = {
    DATA_PATH,
    MAX_CONTEXT_CHUNKS,
    MAX_CONTEXT_CHARS,
    UNIVERSITY_META,
    VERIFIED_PAGE_RAG_TAGS,
    TYPE_TAG_RULES,
    getAvailableUniversities,
    inferTypeTags,
    inferUniversityTag,
    isKnownUniversityTag,
    loadRagData,
    resolveChatContext,
    resolvePageTag,
    retrieveContext
};
