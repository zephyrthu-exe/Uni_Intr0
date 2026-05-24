const categories = [
    { id: 'engineering', label: 'Engineering', icon: 'fa-users-gear' },
    { id: 'it', label: 'IT', icon: 'fa-laptop-code' },
    { id: 'polytechnic', label: 'Polytechnic', icon: 'fa-gears' },
    { id: 'maritime', label: 'Maritime', icon: 'fa-ship' },
    { id: 'aviation', label: 'Aviation', icon: 'fa-plane-up' },
    { id: 'art', label: 'Art', icon: 'fa-graduation-cap' },
    { id: 'medicine', label: 'Medicine', icon: 'fa-staff-snake' },
    { id: 'medtech', label: 'MedTech', icon: 'fa-laptop-medical' },
    { id: 'pharmacy', label: 'Pharmacy', icon: 'fa-pills' },
    { id: 'nursing', label: 'Nursing', icon: 'fa-user-nurse' },
    { id: 'yezin', label: 'Yezin Universities', icon: 'fa-building-columns' },
    { id: 'economics', label: 'Economics', icon: 'fa-chart-line' },
    { id: 'education', label: 'Education', icon: 'fa-user-graduate' },
    { id: 'language', label: 'Foreign Language', icon: 'fa-language' },
    { id: 'management', label: 'Management College', icon: 'fa-people-group' }
];

const universities = [
    { id: 'ytu', category: 'engineering', name: 'Yangon Technological University', short: 'YTU', majors: ['Civil Engineering', 'Architecture', 'Mechanical Engineering', 'Electrical Power Engineering', 'Electronic Engineering', 'Computer Engineering and Information Technology', 'Mechatronic Engineering', 'Chemical Engineering', 'Textile Engineering', 'Mining Engineering', 'Petroleum Engineering', 'Metallurgical Engineering and Materials Science'] },
    { id: 'mtu', category: 'engineering', name: 'Mandalay Technological University', short: 'MTU', majors: ['Civil Engineering', 'Architecture', 'Mechanical Engineering', 'Electrical Power Engineering', 'Electronic Engineering', 'Computer Engineering and Information Technology', 'Mechatronic Engineering', 'Chemical Engineering'] },
    { id: 'wytu', category: 'engineering', name: 'West Yangon Technological University', short: 'WYTU', majors: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Power Engineering', 'Electronic Engineering', 'Information Technology'] },
    { id: 'tu-pyay', category: 'engineering', name: 'Technological University Pyay', short: 'TU Pyay', majors: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Power Engineering', 'Electronic Engineering'] },
    { id: 'tu-magway', category: 'engineering', name: 'Technological University Magway', short: 'TU Magway', majors: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Power Engineering', 'Electronic Engineering'] },
    { id: 'utycc', category: 'engineering', name: 'University of Technology - Yadanabon Cybercity', short: 'UTYCC', majors: ['Information Technology', 'Computer Engineering', 'Electronic Engineering'] },
    { id: 'uit', category: 'it', name: 'University of Information Technology', short: 'UIT', majors: ['Computer Science', 'Computer Technology', 'Information Science'] },
    { id: 'ucsy', category: 'it', name: 'University of Computer Studies Yangon', short: 'UCSY', majors: ['Computer Science', 'Computer Technology'] },
    { id: 'ucsmgy', category: 'it', name: 'University of Computer Studies Magway', short: 'UCSMGY', majors: ['Computer Science', 'Computer Technology'] },
    { id: 'miit', category: 'it', name: 'Myanmar Institute of Information Technology', short: 'MIIT', majors: ['Computer Science', 'Information Technology', 'Software Engineering'] },
    { id: 'nspu', category: 'polytechnic', name: 'Naypyitaw State Polytechnic University', short: 'NSPU', majors: ['Polytechnic and applied technology programs'] },
    { id: 'mmu', category: 'maritime', name: 'Myanmar Maritime University', short: 'MMU', majors: ['Marine Engineering', 'Nautical Science', 'Port and Harbour Engineering'] },
    { id: 'maeu', category: 'aviation', name: 'Myanmar Aerospace Engineering University', short: 'MAEU', majors: ['Aerospace Engineering', 'Avionics', 'Propulsion and Aircraft Systems'] },
    { id: 'yu', category: 'art', name: 'Yangon University', short: 'YU', majors: ['Arts', 'Science', 'Humanities', 'Social Sciences'] },
    { id: 'um1', category: 'medicine', name: 'University of Medicine 1', short: 'UM1', majors: ['Medicine and Surgery'] },
    { id: 'um2', category: 'medicine', name: 'University of Medicine 2', short: 'UM2', majors: ['Medicine and Surgery'] },
    { id: 'ummdy', category: 'medicine', name: 'University of Medicine Mandalay', short: 'UMMDY', majors: ['Medicine and Surgery'] },
    { id: 'ummgy', category: 'medicine', name: 'University of Medicine Magway', short: 'UMMGY', majors: ['Medicine and Surgery'] },
    { id: 'udm-yangon', category: 'medicine', name: 'University of Dental Medicine Yangon', short: 'UDM-Yangon', majors: ['Dental Medicine'] },
    { id: 'uch', category: 'medicine', name: 'University of Community Health', short: 'UCH', majors: ['Community Health'] },
    { id: 'uomtygn', category: 'medtech', name: 'University of Medical Technology Yangon', short: 'UOMTYGN', majors: ['Medical Laboratory Technology', 'Medical Imaging Technology'] },
    { id: 'uopygn', category: 'pharmacy', name: 'University of Pharmacy Yangon', short: 'UOPYGN', majors: ['Pharmacy'] },
    { id: 'uopmdy', category: 'pharmacy', name: 'University of Pharmacy Mandalay', short: 'UOPMDY', majors: ['Pharmacy'] },
    { id: 'uonygn', category: 'nursing', name: 'University of Nursing Yangon', short: 'UONYGN', majors: ['Nursing'] },
    { id: 'yau', category: 'yezin', name: 'Yezin Agricultural University', short: 'YAU', majors: ['Agriculture', 'Agronomy', 'Plant Science'] },
    { id: 'ufes', category: 'yezin', name: 'University of Forestry and Environmental Science', short: 'UFES', majors: ['Forestry', 'Environmental Science'] },
    { id: 'uvs', category: 'yezin', name: 'University of Veterinary Science', short: 'UVS', majors: ['Veterinary Science'] },
    { id: 'yueco', category: 'economics', name: 'Yangon University of Economics', short: 'YUECO', majors: ['Economics', 'Statistics', 'Commerce', 'Public Administration'] },
    { id: 'yuoe', category: 'education', name: 'Yangon University of Education', short: 'YUoE', majors: ['Education'] },
    { id: 'yufl', category: 'language', name: 'Yangon University of Foreign Language', short: 'YUFL', majors: ['English', 'Chinese', 'Japanese', 'Korean', 'French', 'German', 'Russian', 'Thai'] },
    { id: 'nmdc', category: 'management', name: 'National Management Degree College', short: 'NMDC', majors: ['Management', 'Business Administration'] }

].map((university) => ({ ...university, images: university.images || [], faqs: university.faqs || [] }));
const medicalGeneralFaqs = [
    { question: "How many medical institutions were described in Myanmar?", answer: "Myanmar was described as having five medical universities plus an NSA medical school, making six institutions in total under the Ministry of Health context described in the source." },
    { question: "What curriculum model is used in medical school?", answer: "Medical school uses an integrated system, where normal and abnormal body-system learning is taught together." },
    { question: "How is medical school assessment structured?", answer: "Assessment was described as 50% Continuous Assessment and 50% Final Assessment. Continuous Assessment may include assignments, group discussions, projects, presentations, role play, speech rounds, IRAT/TRAT, and poster presentations." },
    { question: "What is the structure of the early medical years?", answer: "The introductory course lasts about two months. Year 1 and Year 2 are each around 11 months and are described as the pre-clinical or basic medical period." },
    { question: "When do medical students begin clinical learning?", answer: "Clinical and ward exposure begins in Year 3. Year 4 and Year 5 are Final Part 1 and Final Part 2, and medical trips may be included." },
    { question: "How should students write the medical university application?", answer: "The application should say Medical University rather than naming a specific campus. Campus allocation depends on region, state, and official rules." },
    { question: "What bond and career information was mentioned for medical students?", answer: "Students passing from 2022 onward on state support were said to sign a five-year bond. Career paths include Assistant Surgeon, specialist routes, and lecturer positions." },
    { question: "How long is the medical university program?", answer: "The program was described as six years in total: Year 1 to Year 5 plus one year as a House Surgeon, with an introductory course of around one and a half months." },
    { question: "What subjects are included in the introductory course?", answer: "Introductory subjects include Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, and Microbiology." },
    { question: "What is the clinical path after the pre-clinical years?", answer: "After the pre-clinical years, students continue into hospital and ward-based clinical learning." }
];

const pharmacyFaqs = [
    { question: "How long is the pharmacy program, and what degree is awarded?", answer: "The pharmacy program is four years long, has no major split, and awards the B.Pharm degree." },
    { question: "What eligibility and admission basis are required for Pharmacy?", answer: "Only Biology-track students can apply. Admission uses total marks rather than English-Chemistry-Biology separation, and Yangon and Mandalay cutoffs were described as the same." },
    { question: "What subjects are taught in Pharmacy?", answer: "First-year major subjects include Pharmaceutics, Pharmaceutical Chemistry, and Pharmacognosy. Minor subjects include Anatomy, Physiology, Biochemistry, Myanmar, English, and Behavioral Science. Later years add Pharmacology, Pathology, Microbiology, and advanced pharmacy fields." },
    { question: "What hostel information was described for Pharmacy?", answer: "Dormitories for both male and female students were stated as 10,000 MMK per month or 120,000 MMK per year, with 24-hour electricity and Wi-Fi. Prices may vary." },
    { question: "Is there a formal Pharmacy uniform?", answer: "No formal uniform is described as mandatory." },
    { question: "What career opportunities are available for Pharmacy graduates?", answer: "Career routes include hospital pharmacy, production, quality control and quality assurance, regulatory work, academic work, retail or community pharmacy, and overseas routes. Foreign licensing may require additional study or training." },
    { question: "What student activities are available?", answer: "Student activities include fresher welcome, fun-fair and sports, water festival, farewell, and health-university football." }
];

const engineeringCutoffColumns = ["မေဂျာ", "၆ ဘာသာ ကျား", "၆ ဘာသာ မ", "၄ ဘာသာ ကျား", "၄ ဘာသာ မ"];

const cutoffData = {
    ytu: {
        intro: "အောက်ပါအချက်အလက်များသည် နှစ်အလိုက် မေဂျာဝင်ခွင့်အနိမ့်ဆုံးဖြတ်မှတ်များဖြစ်သည်။ ကျား/မ နှင့် ၄ ဘာသာ/၆ ဘာသာကို ခွဲခြားဖော်ပြထားသည်။",
        sections: [
            {
                title: "၂၀၂၂ ခုနှစ် အနိမ့်ဆုံးဖြတ်မှတ်များ",
                note: "တစ်နှစ်လုံးစာ အနိမ့်ဆုံးအမှတ် - ၆ ဘာသာ: ၄၅၉၊ ၄ ဘာသာ: ၃၀၇",
                columns: engineeringCutoffColumns,
                rows: [
                    ["Civil", "၅၂၉", "၅၀၆", "၃၄၈", "၃၄၁"],
                    ["Mechanical", "၄၉၅", "၄၉၀", "၃၂၇", "၃၂၂"],
                    ["Electrical Power", "၄၇၁", "၄၉၄", "၃၂၀", "၃၂၃"],
                    ["Electronics", "၄၈၁", "၄၉၀", "၃၁၈", "၃၂၃"],
                    ["Computer Engineering and IT", "၄၉၈", "၄၉၀", "၃၃၀", "၃၃၁"],
                    ["Mechatronics", "၄၇၉", "၄၉၅", "၃၁၈", "၃၂၁"],
                    ["Chemical", "၄၇၁", "၄၈၈", "၃၁၄", "၃၂၀"],
                    ["Textiles", "၄၈၃", "၄၉၂", "၃၀၉", "၃၁၆"],
                    ["Mining", "၄၇၆", "၄၈၅", "၃၀၉", "၃၁၄"],
                    ["Petroleum", "၄၇၈", "၄၇၈", "၃၁၇", "၃၁၉"],
                    ["Metallurgy", "၄၆၅", "၄၇၈", "၃၀၈", "၃၁၄"],
                    ["Architecture", "၅၀၉", "၅၀၈", "၃၃၇", "၃၃၄"],
                    ["Telecommunications", "၄၇၆", "၄၈၇", "၃၁၁", "၃၁၇"],
                    ["Food", "၄၅၉", "၄၇၁", "၃၀၇", "၃၁၄"]
                ]
            },
            {
                title: "၂၀၂၃ ခုနှစ် အနိမ့်ဆုံးဖြတ်မှတ်များ",
                note: "တစ်နှစ်လုံးစာ အနိမ့်ဆုံးအမှတ် - ၆ ဘာသာ: ၄၇၂၊ ၄ ဘာသာ: ၃၂၆",
                columns: engineeringCutoffColumns,
                rows: [
                    ["Civil", "၅၂၀", "၅၂၇", "၃၅၂", "၃၅၂"],
                    ["Mechanical", "၅၀၇", "၅၁၅", "၃၄၁", "၃၄၄"],
                    ["Electrical Power", "၅၀၅", "၅၁၄", "၃၃၈", "၃၄၃"],
                    ["Electronics", "၅၁၀", "၅၁၆", "၃၃၅", "၃၄၁"],
                    ["Computer Engineering and IT", "၅၁၄", "၅၁၆", "၃၄၈", "၃၄၈"],
                    ["Mechatronics", "၅၀၇", "၅၀၉", "၃၃၅", "၃၄၀"],
                    ["Chemical", "၄၉၂", "၅၁၁", "၃၃၁", "၃၃၉"],
                    ["Textiles", "၄၉၇", "၅၀၃", "၃၂၆", "၃၃၇"],
                    ["Mining", "၄၉၂", "၅၀၈", "၃၃၀", "၃၃၄"],
                    ["Petroleum", "၄၇၈", "၄၉၀", "၃၃၁", "၃၃၅"],
                    ["Metallurgy", "၄၉၃", "၄၉၈", "၃၂၆", "၃၃၄"],
                    ["Architecture", "၅၁၁", "၅၁၇", "၃၄၆", "၃၄၈"],
                    ["Telecommunications", "၄၈၈", "၅၀၉", "၃၂၈", "၃၃၅"],
                    ["Food", "၄၇၂", "၄၉၂", "၃၂၆", "၃၃၄"]
                ]
            },
            {
                title: "၂၀၂၄ ခုနှစ် အနိမ့်ဆုံးဖြတ်မှတ်များ",
                note: "တစ်နှစ်လုံးစာ အနိမ့်ဆုံးအမှတ် - ၆ ဘာသာ: ၄၃၉၊ ၄ ဘာသာ: ၃၁၂",
                columns: engineeringCutoffColumns,
                rows: [
                    ["Civil", "၅၂၀", "၄၉၂", "၃၄၄", "၃၃၈"],
                    ["Mechanical", "၄၇၀", "၄၅၈", "၃၃၆", "၃၂၀"],
                    ["Electrical Power", "၄၈၁", "၄၈၁", "၃၃၄", "၃၂၂"],
                    ["Electronics", "၄၇၆", "၄၆၅", "၃၂၉", "၃၂၄"],
                    ["Computer Engineering and IT", "၅၁၉", "၄၉၅", "၃၄၅", "၃၃၃"],
                    ["Mechatronics", "၄၅၉", "၄၆၅", "၃၂၇", "၃၁၇"],
                    ["Chemical", "၄၇၇", "၄၇၅", "၃၂၀", "၃၁၈"],
                    ["Textiles", "၄၆၆", "၄၆၈", "၃၁၅", "၃၁၃"],
                    ["Mining", "၄၇၁", "၄၇၂", "၃၁၈", "၃၁၂"],
                    ["Petroleum", "၄၇၂", "၄၇၉", "၃၁၈", "၃၁၄"],
                    ["Metallurgy", "၄၄၄", "၄၄၀", "၃၁၅", "၃၁၂"],
                    ["Architecture", "၄၈၄", "၄၉၇", "၃၃၉", "၃၃၆"],
                    ["Telecommunications", "၄၆၆", "၄၅၇", "၃၁၅", "၃၁၅"],
                    ["Food", "၄၃၉", "၄၅၃", "၃၁၂", "၃၁၂"]
                ]
            }
        ]
    },
    mtu: {
        intro: "၂၀၂၄-၂၀၂၅ ပညာသင်နှစ်အတွက် မေဂျာအလိုက် ၄ ဘာသာနှင့် ၆ ဘာသာ အမြင့်ဆုံး/အနိမ့်ဆုံးဝင်ခွင့်အမှတ်များဖြစ်သည်။",
        sections: [
            {
                title: "၂၀၂၄-၂၀၂၅ ပညာသင်နှစ် ဝင်ခွင့်အမှတ်များ",
                columns: ["မေဂျာ", "အမြင့်ဆုံး (၄ ဘာသာ)", "အမြင့်ဆုံး (၆ ဘာသာ)", "အနိမ့်ဆုံး (၄ ဘာသာ)", "အနိမ့်ဆုံး (၆ ဘာသာ)"],
                rows: [
                    ["Civil Engineering", "၃၆၃", "၅၂၇", "၃၃၀", "၄၆၂"],
                    ["Architecture", "၃၄၀", "၅၁၀", "၃၂၅", "၄၃၀"],
                    ["Mechanical", "၃၂၈", "၄၇၆", "၃၁၁", "၄၀၀"],
                    ["Electronic", "၃၂၈", "၄၆၇", "၃၁၈", "၄၂၂"],
                    ["Electrical Power", "၃၂၄", "၄၈၄", "၃၁၃", "၄၄၆"],
                    ["CEIT", "၃၂၉", "၄၆၈", "၃၂၁", "၄၅၀"],
                    ["Mechatronics", "၃၂၆", "၄၇၀", "၃၀၈", "၄၃၀"],
                    ["Chemical Engineering", "၃၀၉", "၄၆၃", "၃၀၃", "၄၁၂"],
                    ["Mining", "၃၀၉", "၄၄၄", "၃၀၆", "၄၂၁"],
                    ["Nuclear Technology", "၃၀၉", "၄၅၃", "၃၀၃", "၄၂၃"],
                    ["Agricultural Engineering", "၃၀၃", "၄၃၃", "၃၀၀", "၄၀၃"]
                ]
            }
        ]
    },
    wytu: {
        intro: "WYTU အတွက် နှစ်အလိုက် မေဂျာဝင်ခွင့်အမှတ်များဖြစ်သည်။",
        sections: [
            {
                title: "Civil နှင့် Architecture",
                columns: ["ပညာသင်နှစ်", "Civil", "Architecture"],
                rows: [
                    ["၂၀၁၆-၁၇", "၄၈၂", "၄၆၈"],
                    ["၂၀၁၇-၁၈", "၄၈၇", "၄၈၀"],
                    ["၂၀၁၈-၁၉", "၅၀၁", "၄၉၃"],
                    ["၂၀၁၉-၂၀", "၄၄၃", "၄၃၀"],
                    ["၂၀၂၂-၂၃", "EMCP ၂၈၅", "EMCP ၂၇၈"],
                    ["၂၀၂၃-၂၄", "EMCP ၃၁၈", "EMCP ၂၉၈"],
                    ["၂၀၂၄-၂၅", "EMCP ၂၉၉", "EMCP ၂၉၅"]
                ]
            },
            {
                title: "IT နှင့် Electronic",
                columns: ["ပညာသင်နှစ်", "IT", "Electronic"],
                rows: [
                    ["၂၀၁၆-၁၇", "၄၅၅", "၄၄၆"],
                    ["၂၀၁၇-၁၈", "၄၆၄", "၄၅၈"],
                    ["၂၀၁၈-၁၉", "၄၈၄", "၄၈၁"],
                    ["၂၀၁၉-၂၀", "၄၂၂", "၄၁၂"],
                    ["၂၀၂၂-၂၃", "EMCP ၂၇၅", "EMCP ၂၇၀"],
                    ["၂၀၂၃-၂၄", "EMCP ၂၈၉", "EMCP ၂၇၅"],
                    ["၂၀၂၄-၂၅", "EMCP ၂၈၄", "EMCP ၂၇၀"]
                ]
            },
            {
                title: "Mechanical နှင့် Electrical Power",
                columns: ["ပညာသင်နှစ်", "Mechanical", "Electrical Power"],
                rows: [
                    ["၂၀၁၆-၁၇", "၄၅၆", "၄၄၉"],
                    ["၂၀၁၇-၁၈", "၄၆၃", "၄၅၅"],
                    ["၂၀၁၈-၁၉", "၄၇၅", "၄၇၄"],
                    ["၂၀၁၉-၂၀", "၃၉၇", "၃၉၉"],
                    ["၂၀၂၂-၂၃", "EMCP ၂၆၉", "EMCP ၂၆၅"],
                    ["၂၀၂၃-၂၄", "EMCP ၂၇၀", "EMCP ၂၇၅"],
                    ["၂၀၂၄-၂၅", "EMCP ၂၅၈", "EMCP ၂၆၃"]
                ]
            },
            {
                title: "Mechatronics နှင့် Chemical",
                columns: ["ပညာသင်နှစ်", "Mechatronics", "Chemical"],
                rows: [
                    ["၂၀၁၆-၁၇", "၄၄၅", "-"],
                    ["၂၀၁၇-၁၈", "၄၅၅", "-"],
                    ["၂၀၁၈-၁၉", "၄၇၉", "-"],
                    ["၂၀၁၉-၂၀", "၄၁၆", "၃၉၄"],
                    ["၂၀၂၂-၂၃", "EMCP ၂၆၈", "EMCP ၂၆၄"],
                    ["၂၀၂၃-၂၄", "EMCP ၂၆၀", "EMCP ၂၅၀ အထက်"],
                    ["၂၀၂၄-၂၅", "EMCP ၂၅၃", "EMCP ၂၅၀"]
                ]
            },
            {
                title: "Textile၊ Metallurgy နှင့် Agricultural",
                columns: ["ပညာသင်နှစ်", "Textile", "Metallurgy", "Agricultural"],
                rows: [
                    ["၂၀၁၉-၂၀", "၃၉၁", "-", "-"],
                    ["၂၀၂၂-၂၃", "EMCP ၂၆၂", "၂၆၀", "-"],
                    ["၂၀၂၃-၂၄", "EMCP ၂၅၀ အထက်", "၂၅၀ အထက်", "-"],
                    ["၂၀၂၄-၂၅", "EMCP ၂၄၁", "၂၄၁", "EMCP ၂၄၀"]
                ]
            }
        ]
    },
    nmdc: {
        intro: "၂၀၂၄-၂၀၂၅ ပညာသင်နှစ်အတွက် ဘာသာရပ်အလိုက် အနိမ့်ဆုံးဝင်ခွင့်အမှတ်များဖြစ်သည်။",
        sections: [
            {
                title: "၂၀၂၄-၂၀၂၅ ပညာသင်နှစ် အနိမ့်ဆုံးဝင်ခွင့်အမှတ်များ",
                note: "၂၀၂၄ ခုနှစ် တက္ကသိုလ်ဝင်တန်းအောင် ကျောင်းသား/သူများအတွက် ဖော်ပြထားသော အမှတ်များဖြစ်သည်။",
                columns: ["ဘာသာရပ်", "အနိမ့်ဆုံးဝင်ခွင့်အမှတ်"],
                rows: [
                    ["BBM", "၄၀၀ မှတ်"],
                    ["EPP", "၃၅၀ မှတ်"],
                    ["THM", "၃၅၀ မှတ်"],
                    ["BEF", "၃၅၀ မှတ်"],
                    ["JNL", "၃၀၀ မှတ်"]
                ]
            }
        ]
    },
    medicalUniversity: {
        intro: "၂၀၂၄-၂၀၂၅ ခုနှစ် တက္ကသိုလ်ဝင်စာမေးပွဲအောင်မြင်သူများအတွက် ဆေးတက္ကသိုလ်ဝင်ခွင့် သတ်မှတ်ချက်များဖြစ်သည်။ ECB ဆိုသည်မှာ English + Chemistry + Biology ၃ ဘာသာပေါင်းရမှတ် ဖြစ်သည်။",
        sections: [
            {
                title: "၆ ဘာသာပေါင်း အခြေခံသတ်မှတ်ချက်",
                columns: ["တွက်ချက်ပုံ", "သတ်မှတ်ချက်"],
                rows: [
                    ["၆ ဘာသာပေါင်းရမှတ်", "၄၅၀ မှတ်အထက်"]
                ]
            },
            {
                title: "ECB အလိုက် သတ်မှတ်ချက်",
                note: "ECB ရမှတ်ပေါ်မူတည်၍ ကျား/မ အလိုက် ခွဲခြားဖော်ပြထားသည်။",
                columns: ["တွက်ချက်ပုံ", "ကျား", "မ"],
                rows: [
                    ["ECB", "၂၃၁ မှတ်အထက်", "၂၄၃ မှတ်အထက်"]
                ]
            }
        ]
    },
    medicalTechnology: {
        intro: "၂၀၂၄-၂၀၂၅ ခုနှစ် တက္ကသိုလ်ဝင်စာမေးပွဲအောင်မြင်သူများအတွက် ဆေးဘက်ဆိုင်ရာ နည်းပညာတက္ကသိုလ်ဝင်ခွင့် သတ်မှတ်ချက်ဖြစ်သည်။",
        sections: [
            {
                title: "၂၀၂၄-၂၀၂၅ ဝင်ခွင့်အမှတ်",
                columns: ["တွက်ချက်ပုံ", "သတ်မှတ်ချက်"],
                rows: [
                    ["၆ ဘာသာပေါင်းရမှတ်", "၄၃၁ မှတ်အထက်"]
                ]
            }
        ]
    },
    pharmacy: {
        intro: "၂၀၂၄-၂၀၂၅ ခုနှစ် တက္ကသိုလ်ဝင်စာမေးပွဲအောင်မြင်သူများအတွက် ဆေးဝါးတက္ကသိုလ်ဝင်ခွင့် သတ်မှတ်ချက်ဖြစ်သည်။",
        sections: [
            {
                title: "၂၀၂၄-၂၀၂၅ ဝင်ခွင့်အမှတ်",
                columns: ["တွက်ချက်ပုံ", "သတ်မှတ်ချက်"],
                rows: [
                    ["၆ ဘာသာပေါင်းရမှတ်", "၃၃၈ မှတ်"]
                ]
            }
        ]
    },
    nursing: {
        intro: "၂၀၂၄-၂၀၂၅ ခုနှစ် တက္ကသိုလ်ဝင်စာမေးပွဲအောင်မြင်သူများအတွက် သူနာပြုတက္ကသိုလ်ဝင်ခွင့် သတ်မှတ်ချက်များဖြစ်သည်။",
        sections: [
            {
                title: "ကျား/မ အလိုက် ဝင်ခွင့်အမှတ်",
                columns: ["တွက်ချက်ပုံ", "ကျား", "မ"],
                rows: [
                    ["ဝင်ခွင့်သတ်မှတ်အမှတ်", "၃၄၉ မှတ်", "၃၉၆ မှတ်"]
                ]
            }
        ]
    },
    communityHealth: {
        intro: "၂၀၂၄-၂၀၂၅ ခုနှစ် တက္ကသိုလ်ဝင်စာမေးပွဲအောင်မြင်သူများအတွက် အခြေခံကျန်းမာရေးတက္ကသိုလ်ဝင်ခွင့် သတ်မှတ်ချက်များဖြစ်သည်။",
        sections: [
            {
                title: "စုစုပေါင်းရမှတ်အလိုက် သတ်မှတ်ချက်",
                columns: ["တွက်ချက်ပုံ", "ကျား", "မ"],
                rows: [
                    ["စုစုပေါင်းရမှတ်", "၃၂၀ မှတ်", "၄၂၀ မှတ်"]
                ]
            }
        ]
    },
    dentalMedicine: {
        intro: "၂၀၂၄-၂၀၂၅ ခုနှစ် တက္ကသိုလ်ဝင်စာမေးပွဲအောင်မြင်သူများအတွက် သွားဘက်ဆိုင်ရာ ဆေးတက္ကသိုလ်ဝင်ခွင့် သတ်မှတ်ချက်များဖြစ်သည်။ ECB ဆိုသည်မှာ English + Chemistry + Biology ၃ ဘာသာပေါင်းရမှတ် ဖြစ်သည်။",
        sections: [
            {
                title: "ECB အလိုက် သတ်မှတ်ချက်",
                columns: ["တွက်ချက်ပုံ", "ကျား", "မ"],
                rows: [
                    ["ECB", "၁၉၇ မှတ်", "၂၃၈ မှတ်"]
                ]
            }
        ]
    }
};

const universityAddresses = {
    ytu: "အင်းစိန်လမ်း၊ ကြို့ကုန်း၊ အင်းစိန်မြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    mtu: "မန္တလေး-လားရှိုးလမ်း၊ ပုသိမ်ကြီးမြို့နယ်၊ မန္တလေးတိုင်းဒေသကြီး၊ မြန်မာ။",
    wytu: "ရွှေပြည်သာ-လှိုင်သာယာလမ်း၊ လှိုင်သာယာမြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    "tu-pyay": "ပြည်-အောင်လံလမ်း၊ နှောကုန်းကျေးရွာ၊ ပြည်မြို့နယ်၊ ပဲခူးတိုင်းဒေသကြီး၊ မြန်မာ။",
    "tu-magway": "မကွေး-တောင်တွင်းကြီးလမ်း၊ မကွေးမြို့နယ်၊ မကွေးတိုင်းဒေသကြီး၊ မြန်မာ။",
    utycc: "ရတနာပုံဆိုက်ဘာစီးတီး၊ ပြင်ဦးလွင်မြို့နယ်၊ မန္တလေးတိုင်းဒေသကြီး၊ မြန်မာ။",
    uit: "ပါရမီလမ်း၊ လှိုင်နယ်မြေ၊ လှိုင်မြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    ucsy: "အမှတ် (၄) လမ်းမကြီး၊ ရွှေပြည်သာမြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    ucsmgy: "မကွေး-တောင်တွင်းကြီးလမ်း၊ မကွေးမြို့နယ်၊ မကွေးတိုင်းဒေသကြီး၊ မြန်မာ။",
    miit: "၇၃ လမ်း၊ ငုရွှေဝါလမ်း၊ ချမ်းမြသာစည်မြို့နယ်၊ မန္တလေးမြို့၊ မြန်မာ။",
    nspu: "ရာဇသင်္ဂဟလမ်း နှင့် သီရိမဏ္ဍိုင်လမ်းဆုံ၊ မင်္ဂလာဒီပရပ်ကွက်၊ ပုဗ္ဗသီရိမြို့နယ်၊ နေပြည်တော်၊ မြန်မာ။",
    mmu: "ကျောက်တန်း-သီလဝါလမ်း၊ သန်လျင်မြို့နယ်၊ ရန်ကုန်တိုင်းဒေသကြီး၊ မြန်မာ။",
    maeu: "မိတ္ထီလာ-ကျောက်ပန်းတောင်းလမ်း၊ မိတ္ထီလာမြို့နယ်၊ မန္တလေးတိုင်းဒေသကြီး၊ မြန်မာ။",
    yu: "တက္ကသိုလ်ရိပ်သာလမ်း၊ ကမာရွတ်မြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    um1: "အမှတ် (၂၄၅)၊ မြို့မကျောင်းလမ်း၊ လမ်းမတော်မြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    um2: "ခေမာသီလမ်း၊ မြောက်ဥက္ကလာပမြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    ummdy: "၃၀ လမ်း၊ ၇၃ လမ်း နှင့် ၇၄ လမ်း ကြား၊ ချမ်းအေးသာစံမြို့နယ်၊ မန္တလေးမြို့၊ မြန်မာ။",
    ummgy: "မကွေး-တောင်တွင်းကြီးလမ်း၊ မကွေးမြို့နယ်၊ မကွေးတိုင်းဒေသကြီး၊ မြန်မာ။",
    "udm-yangon": "သံသုမာလမ်း၊ သင်္ဃန်းကျွန်းမြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    uch: "ထုံးဘို၊ မကွေးမြို့နယ်၊ မကွေးတိုင်းဒေသကြီး၊ မြန်မာ။",
    uomtygn: "အောက်မင်္ဂလာဒုံလမ်း၊ အင်းစိန်မြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    uopygn: "ဝေဇယန္တာလမ်း၊ တောင်ဥက္ကလာပမြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    uopmdy: "မန္တလေး-လားရှိုးလမ်း၊ ပုသိမ်ကြီးမြို့နယ်၊ မန္တလေးတိုင်းဒေသကြီး၊ မြန်မာ။",
    uonygn: "ဗိုလ်ချုပ်အောင်ဆန်းလမ်း၊ လမ်းမတော်မြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    yau: "ရေဆင်း၊ ဇေယျာသီရိမြို့နယ်၊ နေပြည်တော်၊ မြန်မာ။",
    ufes: "ရေဆင်း၊ ဇေယျာသီရိမြို့နယ်၊ နေပြည်တော်၊ မြန်မာ။",
    uvs: "ရေဆင်း၊ ဇေယျာသီရိမြို့နယ်၊ နေပြည်တော်၊ မြန်မာ။",
    yueco: "အင်းလျားလမ်း၊ ကမာရွတ်မြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    yuoe: "ပြည်လမ်း၊ ကမာရွတ်မြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    yufl: "တက္ကသိုလ်ရိပ်သာလမ်း၊ ကမာရွတ်မြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။",
    nmdc: "ဗိုလ်တထောင်ဘုရားလမ်း၊ ဗိုလ်တထောင်မြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာ။"
};

const bachelorMajorData = {
    ytu: [
        "Bachelor of Architecture - B.Arch.",
        "Bachelor of Engineering (Civil) - B.E. (Civil)",
        "Bachelor of Engineering (Electrical Power) - B.E. (Electrical Power)",
        "Bachelor of Engineering (Electronic) - B.E. (Electronic)",
        "Bachelor of Engineering (Computer Engineering and Information Technology) - B.E. (CEIT)",
        "Bachelor of Engineering (Mechanical) - B.E. (Mechanical)",
        "Bachelor of Engineering (Mechatronics) - B.E. (Mechatronics)",
        "Bachelor of Engineering (Metallurgy) - B.E. (Metallurgy)",
        "Bachelor of Engineering (Mining) - B.E. (Mining)",
        "Bachelor of Engineering (Petroleum) - B.E. (Petroleum)",
        "Bachelor of Engineering (Textile) - B.E. (Textile)",
        "Bachelor of Engineering (Chemical) - B.E. (Chemical)"
    ],
    mtu: [
        "Bachelor of Architecture - B.Arch.",
        "Bachelor of Engineering (Civil) - B.E. (Civil)",
        "Bachelor of Engineering (Mechanical) - B.E. (Mechanical)",
        "Bachelor of Engineering (Electronics) - B.E. (Electronics)",
        "Bachelor of Engineering (Electrical Power) - B.E. (Electrical Power)",
        "Bachelor of Engineering (Computer Engineering and Information Technology) - B.E. (CEIT)",
        "Bachelor of Engineering (Mechatronics) - B.E. (Mechatronics)",
        "Bachelor of Engineering (Chemical) - B.E. (Chemical)",
        "Bachelor of Engineering (Nuclear Technology) - B.E. (Nuclear Technology)",
        "Bachelor of Engineering (Mining) - B.E. (Mining)",
        "Bachelor of Science (Biotechnology) - B.Sc. (Biotechnology)",
        "Bachelor of Engineering (Petroleum) - B.E. (Petroleum)",
        "Bachelor of Engineering (Metallurgy) - B.E. (Metallurgy)",
        "Bachelor of Engineering (Remote Sensing) - B.E. (Remote Sensing)"
    ],
    wytu: [
        "Bachelor of Architecture - B.Arch.",
        "Bachelor of Engineering (Civil) - B.E. (Civil)",
        "Bachelor of Engineering (Mechanical) - B.E. (Mechanical)",
        "Bachelor of Engineering (Electrical Power) - B.E. (Electrical Power)",
        "Bachelor of Engineering (Electronic and Communication) - B.E. (Electronic and Communication)",
        "Bachelor of Engineering (Mechatronics) - B.E. (Mechatronics)",
        "Bachelor of Engineering / Bachelor of Technology (Information Technology) - B.E. / B.Tech. (Information Technology)",
        "Bachelor of Engineering (Chemical) - B.E. (Chemical)",
        "Bachelor of Engineering (Mining) - B.E. (Mining)",
        "Bachelor of Engineering (Metallurgy and Materials Science) - B.E. (Metallurgy and Materials Science)",
        "Bachelor of Engineering (Agricultural Engineering) - B.E. (Agricultural Engineering)",
        "Bachelor of Engineering (Textile) - B.E. (Textile)"
    ],
    "tu-pyay": [
        "Bachelor of Technology / Bachelor of Engineering (Civil) - B.Tech. / B.E. (Civil)",
        "Bachelor of Technology / Bachelor of Engineering (Petroleum) - B.Tech. / B.E. (Petroleum)",
        "Bachelor of Technology / Bachelor of Engineering (Electrical Power) - B.Tech. / B.E. (Electrical Power)",
        "Bachelor of Technology / Bachelor of Engineering (Electronic) - B.Tech. / B.E. (Electronic)",
        "Bachelor of Technology / Bachelor of Engineering (Information Technology) - B.Tech. / B.E. (Information Technology)",
        "Bachelor of Technology / Bachelor of Engineering (Mechanical) - B.Tech. / B.E. (Mechanical)",
        "Bachelor of Technology / Bachelor of Engineering (Mechatronic) - B.Tech. / B.E. (Mechatronic)",
        "Bachelor of Architecture - B.Arch."
    ],
    "tu-magway": [
        "Bachelor of Engineering (Civil) - B.E. (Civil)",
        "Bachelor of Engineering (Electronic Communication) - B.E. (EC)",
        "Bachelor of Engineering (Electrical Power) - B.E. (Electrical Power)",
        "Bachelor of Engineering (Mechanical) - B.E. (Mechanical)",
        "Bachelor of Engineering (Mechatronic) - B.E. (Mechatronic)",
        "Bachelor of Engineering (Chemical) - B.E. (Chemical)"
    ],
    utycc: [
        "Bachelor of Engineering (Information Science and Technology) - B.E. (IST)",
        "Bachelor of Engineering (Computer Engineering) - B.E. (CE)",
        "Bachelor of Engineering (Electronics Engineering) - B.E. (EcE)",
        "Bachelor of Engineering (Mechanical Precision and Automation) - B.E. (MPA)",
        "Bachelor of Engineering (Materials and Metallurgy) - B.E. (AME)"
    ],
    uit: [
        "Bachelor of Computer Science (Software Engineering) - B.C.Sc. (Software Engineering)",
        "Bachelor of Computer Science (Business Information Systems) - B.C.Sc. (Business Information Systems)",
        "Bachelor of Computer Science (Knowledge Engineering) - B.C.Sc. (Knowledge Engineering)",
        "Bachelor of Computer Science (High Performance Computing) - B.C.Sc. (High Performance Computing)",
        "Bachelor of Computer Technology (Embedded Systems) - B.C.Tech. (Embedded Systems)",
        "Bachelor of Computer Technology (Communication and Networking) - B.C.Tech. (Communication and Networking)",
        "Bachelor of Computer Technology (Cyber Security) - B.C.Tech. (Cyber Security)"
    ],
    ucsy: [
        "Bachelor of Computer Science (Knowledge Engineering) - B.C.Sc. (Knowledge Engineering)",
        "Bachelor of Computer Science (Software Engineering) - B.C.Sc. (Software Engineering)",
        "Bachelor of Computer Science (Cyber Security and Forensics) - B.C.Sc. (Cyber Security and Forensics)",
        "Bachelor of Computer Science (Business Information Systems) - B.C.Sc. (Business Information Systems)",
        "Bachelor of Computer Science (High Performance Computing) - B.C.Sc. (High Performance Computing)",
        "Bachelor of Computer Technology (Embedded Systems) - B.C.Tech. (Embedded Systems)",
        "Bachelor of Computer Technology (Computer Communication and Networks) - B.C.Tech. (Computer Communication and Networks)"
    ],
    ucsmgy: [
        "Bachelor of Computer Science - B.C.Sc.",
        "Bachelor of Computer Technology - B.C.Tech."
    ],
    miit: [
        "Bachelor of Engineering (Honours) (Computer Science and Engineering) - B.E. (Hons.) (Computer Science and Engineering)",
        "Bachelor of Engineering (Honours) (Electronics and Communication Engineering) - B.E. (Hons.) (Electronics and Communication Engineering)"
    ],
    nspu: [
        "Bachelor of Engineering (Civil) - B.E. (Civil)",
        "Bachelor of Engineering (Electronic) - B.E. (Electronic)",
        "Bachelor of Engineering (Electrical Power) - B.E. (Electrical Power)",
        "Bachelor of Engineering (Mechanical) - B.E. (Mechanical)",
        "Bachelor of Architecture - B.Arch.",
        "Bachelor of Engineering (Computer Engineering and Information Technology) - B.E. (CEIT)",
        "Bachelor of Engineering (Environmental Engineering) - B.E. (Environmental Engineering)",
        "Bachelor of Computer Science - B.C.Sc.",
        "Bachelor of Computer Technology - B.C.Tech."
    ],
    mmu: [
        "Bachelor of Engineering (Naval Architecture) - B.E. (Naval Architecture)",
        "Bachelor of Engineering (Marine Engineering) - B.E. (Marine Engineering)",
        "Bachelor of Engineering (Port and Harbour Engineering) - B.E. (Port and Harbour Engineering)",
        "Bachelor of Engineering (River and Coastal Engineering) - B.E. (River and Coastal Engineering)",
        "Bachelor of Engineering (Marine Electrical Systems and Electronics) - B.E. (Marine Electrical Systems and Electronics)",
        "Bachelor of Engineering (Marine Mechanical Engineering) - B.E. (Marine Mechanical Engineering)",
        "Bachelor of Science with Honours (Nautical Science) - B.Sc. (Hons.) (Nautical Science)"
    ],
    maeu: [
        "Bachelor of Engineering (Aerospace - Propulsion and Flight Vehicles) - B.E. (Aerospace - Propulsion and Flight Vehicles)",
        "Bachelor of Engineering (Aerospace - Avionics) - B.E. (Aerospace - Avionics)",
        "Bachelor of Engineering (Aerospace - Electrical Systems and Instrumentation) - B.E. (Aerospace - Electrical Systems and Instrumentation)",
        "Bachelor of Engineering (Aerospace - Space System Engineering) - B.E. (Aerospace - Space System Engineering)",
        "Bachelor of Engineering (Aerospace - Fuel and Propellant Engineering) - B.E. (Aerospace - Fuel and Propellant Engineering)"
    ],
    yu: [
        "Bachelor of Arts (Myanmar) - B.A. (Myanmar)",
        "Bachelor of Arts (English) - B.A. (English)",
        "Bachelor of Arts (History) - B.A. (History)",
        "Bachelor of Laws - LL.B.",
        "Bachelor of Arts (Philosophy) - B.A. (Philosophy)",
        "Bachelor of Arts / Bachelor of Science (Psychology) - B.A. / B.Sc. (Psychology)",
        "Bachelor of Arts (Anthropology) - B.A. (Anthropology)",
        "Bachelor of Arts (Archaeology) - B.A. (Archaeology)",
        "Bachelor of Arts (International Relations) - B.A. (International Relations)",
        "Bachelor of Arts (Political Science) - B.A. (Political Science)",
        "Bachelor of Arts / Bachelor of Science (Geography) - B.A. / B.Sc. (Geography)",
        "Bachelor of Arts (Oriental Studies) - B.A. (Oriental Studies)",
        "Bachelor of Arts (Library and Information Studies) - B.A. (Library and Information Studies)",
        "Bachelor of Science (Physics) - B.Sc. (Physics)",
        "Bachelor of Science (Chemistry) - B.Sc. (Chemistry)",
        "Bachelor of Science (Mathematics) - B.Sc. (Mathematics)",
        "Bachelor of Science (Zoology) - B.Sc. (Zoology)",
        "Bachelor of Science (Botany) - B.Sc. (Botany)",
        "Bachelor of Science (Industrial Chemistry) - B.Sc. (Industrial Chemistry)",
        "Bachelor of Science (Geology) - B.Sc. (Geology)",
        "Bachelor of Science (Computer Studies) - B.Sc. (Computer Studies)",
        "Bachelor of Science (Environment and Water Studies) - B.Sc. (Environment and Water Studies)"
    ],
    um1: [
        "Bachelor of Medicine, Bachelor of Surgery - M.B.,B.S. / MBBS"
    ],
    um2: [
        "Bachelor of Medicine, Bachelor of Surgery - M.B.,B.S. / MBBS"
    ],
    ummdy: [
        "Bachelor of Medicine, Bachelor of Surgery - M.B.,B.S. / MBBS"
    ],
    ummgy: [
        "Bachelor of Medicine, Bachelor of Surgery - M.B.,B.S. / MBBS"
    ],
    "udm-yangon": [
        "Bachelor of Dental Surgery - B.D.S."
    ],
    uch: [
        "Bachelor of Community Health - B.Comm.H."
    ],
    uomtygn: [
        "Bachelor of Medical Technology (Medical Laboratory Technology) - B.Med.Tech. (Medical Laboratory Technology)",
        "Bachelor of Medical Technology (Medical Imaging Technology) - B.Med.Tech. (Medical Imaging Technology)",
        "Bachelor of Medical Technology (Physiotherapy) - B.Med.Tech. (Physiotherapy)",
        "Bachelor of Medical Technology (Prosthetics and Orthotics) - B.Med.Tech. (Prosthetics and Orthotics)",
        "Bachelor of Medical Technology (Radiotherapy Technology) - B.Med.Tech. (Radiotherapy Technology)",
        "Bachelor of Medical Technology (Health Information) - B.Med.Tech. (Health Information)",
        "Bachelor of Medical Technology (Medical Engineering) - B.Med.Tech. (Medical Engineering)"
    ],
    uopygn: [
        "Bachelor of Pharmacy - B.Pharm."
    ],
    uopmdy: [
        "Bachelor of Pharmacy - B.Pharm."
    ],
    uonygn: [
        "Bachelor of Nursing Science - B.N.Sc."
    ],
    yau: [
        "Bachelor of Agricultural Science (Rice Crop Production) - B.Agr.Sc. (RCP)",
        "Bachelor of Agricultural Science (Plant Protection) - B.Agr.Sc. (PP)",
        "Bachelor of Agricultural Science (Horticultural Crops Production) - B.Agr.Sc. (HCP)",
        "Bachelor of Agricultural Science (Plantation Crops Production) - B.Agr.Sc. (PCP)",
        "Bachelor of Agricultural Science (Sugar Crops Production) - B.Agr.Sc. (SCP)",
        "Bachelor of Agricultural Science (Maize and Other Cereal Crops Production) - B.Agr.Sc. (MOC)",
        "Bachelor of Agricultural Science (Oilseed Crops and Pulses Production) - B.Agr.Sc. (OCPP)",
        "Bachelor of Agricultural Science (Cotton and Other Fiber Crops Production) - B.Agr.Sc. (COFC)",
        "Bachelor of Agricultural Science (Agri-Business Management) - B.Agr.Sc. (ABM)",
        "Bachelor of Agricultural Science (Soil and Water Management) - B.Agr.Sc. (SWM)"
    ],
    ufes: [
        "Bachelor of Science (Forestry) - B.Sc. (Forestry)"
    ],
    uvs: [
        "Bachelor of Animal Science - BASc"
    ],
    yueco: [
        "Bachelor of Economics (Economics) - B.Econ. (Economics)",
        "Bachelor of Economics (Statistics) - B.Econ. (Statistics)",
        "Bachelor of Public Administration - BPA",
        "Bachelor of Development Studies - BDevS",
        "Bachelor of Population Studies - BPS",
        "Bachelor of Commerce - B.Com.",
        "Bachelor of Accounting - B.Act.",
        "Bachelor of Business Administration - BBA",
        "Bachelor of Business Management - BBM"
    ],
    yuoe: [
        "Bachelor of Education - B.Ed."
    ],
    yufl: [
        "Bachelor of Arts (Chinese) - B.A. (Chinese)",
        "Bachelor of Arts (English) - B.A. (English)",
        "Bachelor of Arts (French) - B.A. (French)",
        "Bachelor of Arts (German) - B.A. (German)",
        "Bachelor of Arts (Italian) - B.A. (Italian)",
        "Bachelor of Arts (Japanese) - B.A. (Japanese)",
        "Bachelor of Arts (Korean) - B.A. (Korean)",
        "Bachelor of Arts (Myanmar) - B.A. (Myanmar)",
        "Bachelor of Arts (Russian) - B.A. (Russian)",
        "Bachelor of Arts (Thai) - B.A. (Thai)",
        "Bachelor of Arts (History) - B.A. (History)",
        "Bachelor of Arts (International Relations) - B.A. (International Relations)",
        "Bachelor of Arts (Linguistics) - B.A. (Linguistics)",
        "Bachelor of Arts (Oriental Studies) - B.A. (Oriental Studies)",
        "Bachelor of Arts (Philosophy) - B.A. (Philosophy)"
    ],
    nmdc: [
        "Bachelor of Business Management - BBM",
        "Bachelor of Arts (English for Professional Purposes) - B.A. (EPP)",
        "Bachelor of Arts (Journalism) - B.A. (Journalism)",
        "Bachelor of Tourism and Hospitality Management - BTHM",
        "Bachelor of Economics and Finance - BEF"
    ]
};

const universityDetails = {
    uch: {
        location: "University of Community Health is located only in Magway.",
        cutoff: cutoffData.communityHealth,
        faqs: [
            { question: "Where is the University of Community Health located?", answer: "University of Community Health is located only in Magway." },
            { question: "How long is the UCH program, and what degree is awarded?", answer: "UCH offers a four-year program that includes a research thesis. The awarded degree is Bachelor of Community Health (B.Comm.H)." },
            { question: "What subjects are included in the UCH curriculum?", answer: "The curriculum includes Anatomy, Physiology, Pharmacology, Pathology, Preventive and Social Medicine, Epidemiology, Communicable Diseases, Behavioural Science, Health Education, Environmental Sanitation, Community Health, Occupational Health, and Statistics." },
            { question: "What career opportunities are available for UCH graduates?", answer: "Graduates may work as health assistants under the Department of Public Health at head office, region, district, township, and rural health center levels. Teaching positions at the school were also mentioned." },
            { question: "How are RHA/RHC and CHA roles described?", answer: "RHA/RHC roles are oriented toward rural clinics and basic treatment. CHA roles focus more on community prevention, promotion, education, advocacy, and data collection." },
            { question: "What admission information was mentioned for UCH?", answer: "Historically, the minimum was described as around 320 marks for male applicants and around 420 marks for female applicants, with boys around 80%. This should be treated only as previous-year data." },
            { question: "What salary information was mentioned for health assistants?", answer: "A health assistant salary was mentioned as around 310,000 MMK. This should be rechecked because salary figures can change quickly." }
        ]
    },
    "udm-yangon": {
        location: "The Yangon dental medicine campus was described as being on Thanthumar Road in Thingangyun Township.",
        cutoff: cutoffData.dentalMedicine,
        faqs: [
            { question: "Where are the dental medicine campuses located?", answer: "Two campuses were identified: Yangon and Mandalay. The Yangon campus was described as being on Thanthumar Road in Thingangyun Township." },
            { question: "How long is the dental medicine program, and what degree is awarded?", answer: "The new-system description includes a foundation period of about two months, followed by Year 1, Year 2, Year 3, Final Year, and House Surgeon. The total duration was stated as five years, and the degree is Bachelor of Dental Surgery (B.D.S)." },
            { question: "What subjects are taught in dental medicine?", answer: "The program includes medical basic subjects such as Anatomy, Physiology, Biochemistry, General Pathology, Microbiology, Pharmacology, General Medicine, and General Surgery, together with dental clinical subjects." },
            { question: "How is student assessment conducted in dental medicine?", answer: "Assessment includes tests, practicals, final theory examinations, and final practical examinations. Percentages may vary by year and subject." },
            { question: "What admission basis was discussed for dental medicine?", answer: "The source mentioned total-mark eligibility around 450 and English-Chemistry-Biology based final separation for medicine and dental admissions. The exact rule should be checked against the current official guide." },
            { question: "What gender ratio was described for dental medicine intake?", answer: "Dental intake was described as about 60% male and 40% female." },
            { question: "Is there any bond or service requirement?", answer: "A five-year government service bond after graduation was mentioned, with 700 lakh MMK compensation discussed for not serving. The current official policy should be verified." },
            { question: "What hostel information was described for dental medicine students?", answer: "Male private dormitory estimates ranged from around 60,000 to 100,000 MMK. Female internal dormitory accommodation was said to have no dormitory fee, but shared utility costs were mentioned." }
        ]
    },
    mtu: {
        cutoff: cutoffData.mtu
    },
    yueco: {
        faqs: [
            { question: "How long is the economics university program?", answer: "The economics university program is a four-year degree program." },
            { question: "What admission basis is used for economics universities?", answer: "Total marks were said to be used for admission. The source also stated that any subject combination, including Biology track, can apply." },
            { question: "How are majors assigned at economics universities?", answer: "Students list preferred majors, and the university assigns majors according to marks and available cutoff. Major changes were described as unavailable, so preference order is important." },
            { question: "Is distance education available for economics universities?", answer: "Distance education exists for economics university programs, but day programs were described as generally preferred by employers." },
            { question: "What historical cutoff information was mentioned?", answer: "Historical figures were described as inconsistent: Ywarthagyi campus around 350, 360, or 390+, and Hlaing campus around 380, 400, or 430+. These figures must be verified." },
            { question: "What campus life and cost information was mentioned?", answer: "Hostel accommodation is available and often prioritized for out-of-town students. Hostel fees were generally described as under 10,000 MMK per month. Uniform was described as not required, but a dress code applies." },
            { question: "What career notes were mentioned for economics majors?", answer: "B.Com, B.Act, and BBA were described as broadly useful for employment. BPA was linked with public, trade, NGO, and graduate-study pathways." }
        ]
    },
    yuoe: {
        faqs: [
            { question: "What uniform is worn by Education University students?", answer: "A white and green uniform is worn throughout the day." },
            { question: "Is distance education available for Education University?", answer: "Distance education is not available." }
        ]
    },
    um1: {
        cutoff: cutoffData.medicalUniversity,
        faqs: [
            ...medicalGeneralFaqs,
            { question: "What admission basis was discussed for UM1?", answer: "The source mentioned total-mark eligibility around 450 and English-Chemistry-Biology based final separation for medicine and dental admissions. The exact rule should be checked against the current official guide." }
        ]
    },
    um2: {
        location: "UM2 was stated to be in North Okkalapa on Khemathila Road, opposite KBZ Bank, about a ten-minute walk from North Okkalapa General Teaching Hospital.",
        cutoff: cutoffData.medicalUniversity,
        faqs: [
            ...medicalGeneralFaqs,
            { question: "What is the structure of Year 1 and Year 2 at UM2?", answer: "Year 1 and Year 2 are pre-clinical years with five modules each. Year 1 examples include Musculoskeletal/Skin, Genetic, Cardiovascular, Respiration, and Gastrointestinal and Liver. Year 2 examples include Haemato, Immunology, Endocrine, Renal/Repro, and Neurology." }
        ]
    },
    ummdy: {
        cutoff: cutoffData.medicalUniversity,
        faqs: [...medicalGeneralFaqs]
    },
    ummgy: {
        cutoff: cutoffData.medicalUniversity,
        faqs: [...medicalGeneralFaqs]
    },
    uomtygn: {
        majors: ["Medical Laboratory Technology", "Medical Imaging Technology", "Physiotherapy", "Radiotherapy Technology", "Health Information"],
        location: "UMTY was described as being in Insein Township, near No. 1 Gate bus stop, on Lower Mingaladon Road.",
        cutoff: cutoffData.medicalTechnology,
        faqs: [
            { question: "How long is the medical technology program, and what degree is awarded?", answer: "The program is four years long, and the degree was stated as B.Med.Tech for medical technology majors." },
            { question: "What career outcomes are available for Medical Laboratory Technology?", answer: "Medical Laboratory Technology was linked with laboratories, blood and body-fluid testing, hospitals, clinics, drug companies, and NGOs." },
            { question: "What career outcomes are available for Medical Imaging Technology?", answer: "Medical Imaging Technology was linked with X-ray and imaging work." },
            { question: "What career outcomes are available for Physiotherapy?", answer: "Physiotherapy was linked with rehabilitation for bones, joints, and muscles." },
            { question: "What career outcomes are available for Radiotherapy Technology and Health Information?", answer: "Radiotherapy Technology and Health Information were described as having hospital and private-sector roles." },
            { question: "Are medical technology graduates job-ready?", answer: "Graduates can work directly after four years." }
        ]
    },
    mmu: {
        majors: ["Naval Architecture and Ocean Engineering (NA)", "Marine Mechanical (MM)", "Nautical Science (NS)", "Marine Engineering (ME)", "Marine Electrical Systems and Electronics (MESE/EE)", "Port and Harbour Engineering (PH)", "River and Coastal Engineering (RC)"],
        cutoff: "2024 minimum whole-school cutoff: 435.",
        faqs: [
            { question: "What is Myanmar Maritime University?", answer: "MMU was described as Myanmar's only university teaching advanced maritime-related fields." },
            { question: "How are admission and major allocation handled at MMU?", answer: "Total Grade-12 marks were said to be used. Majors are assigned from first year according to marks, and major change may be possible before the second semester of first year if the student meets the target major cutoff." },
            { question: "How was MMU compared with MMMC?", answer: "MMMC was contrasted as a college or diploma route with different admission and a much stricter initial period, while MMU was described as the university degree route." },
            { question: "What initial costs were mentioned for MMU students?", answer: "Uniform, shoes, and tie were listed as initial costs. The uniform color was described as dark or navy trousers, with short or long sleeves allowed." },
            { question: "What documents are required for MMU application?", answer: "License photos, ID copies for the student and parents, the original mark sheet, and the application form were listed." },
            { question: "How do students apply to MMU?", answer: "MMU uses a separate application rather than the regular central university entrance form." }
        ]
    },
    nmdc: {
        majors: ["BM/BBM", "EPP", "THM", "Journalism", "EF/BEF"],
        cutoff: cutoffData.nmdc,
        faqs: [
            { question: "What majors are available at NMDC?", answer: "Five majors were listed: BM/BBM, EPP, THM, Journalism, and EF/BEF." },
            { question: "How long are NMDC programs?", answer: "All majors are four-year programs." },
            { question: "What is BM/BBM?", answer: "BM/BBM refers to Business Management, covering management functions, economics, finance, marketing, operations, and other business subjects." },
            { question: "What is EPP?", answer: "EPP stands for English for Professional Purposes. It includes advanced English, business English, and business subjects." },
            { question: "What is THM?", answer: "THM stands for Tourism and Hospitality Management. It includes tourism, hospitality, hotel and restaurant components, as well as HR, management, marketing, and accounting." },
            { question: "What is studied in Journalism?", answer: "Journalism includes news writing, business journalism, interviewing, translation, reporting and writing, data journalism, radio and television journalism, and media management." },
            { question: "What is EF/BEF?", answer: "EF/BEF refers to Economics and Finance, added around 2022. It combines economic and financial theory with practical business concepts." },
            { question: "How do students apply to NMDC?", answer: "NMDC uses a separate application rather than the regular central university entrance form. Online application and in-person form options are available." }
        ]
    },
    uonygn: {
        cutoff: cutoffData.nursing,
        faqs: [
            { question: "Where are nursing institutions located?", answer: "There are two nursing universities, Yangon and Mandalay, and nursing training schools also exist across states and regions." },
            { question: "How long is nursing university, and what degree is awarded?", answer: "Nursing university is four years long and awards B.N.Sc (Generic), Bachelor of Nursing Science." },
            { question: "What further study pathways are available?", answer: "M.N.Sc and Ph.D pathways are available." },
            { question: "What is the nursing school route?", answer: "Nursing training school is a three-year route and awards a Diploma." },
            { question: "What eligibility and score basis are used for nursing institutions?", answer: "Nursing institutions require passing with the science or Biology track. Nursing universities use the six-subject total while nursing training school uses the first three subjects." },
            { question: "What service or bond information was mentioned?", answer: "Compensation around 250 lakh MMK was mentioned for an allied-health type bond, compared with 600 lakh MMK for medicine. The current nursing-specific agreement should be verified." }
        ]
    },
    uopygn: {
        location: "University of Pharmacy Yangon was described as being in North Okkalapa on Dhamma Thukha Road, beside Webargi Infectious Disease Hospital.",
        cutoff: cutoffData.pharmacy,
        faqs: pharmacyFaqs
    },
    uopmdy: {
        location: "University of Pharmacy Mandalay was described as being in Amarapura Township near Taw Win village or Htonbo-Myitnge Road, beside the mental health hospital.",
        cutoff: cutoffData.pharmacy,
        faqs: pharmacyFaqs
    },
    uit: {
        majors: ["Software Engineering", "Knowledge Engineering (AI)", "Business Information Systems", "High Performance Computing", "Communications and Networking", "Embedded Systems", "Cyber Security"],
        location: "UIT was stated to be on Parami Road, opposite the Hlaing Economics campus.",
        faqs: [
            { question: "Who should apply to UIT?", answer: "Students who are interested in IT, programming, and computers were recommended to apply." },
            { question: "How long is the UIT program?", answer: "Under the old system, the program was five years or ten semesters. Under the new system, it is four years or eight semesters." },
            { question: "What admission basis is mentioned for UIT?", answer: "Total marks are used, and there is no entrance exam. Application was described as possible from a total of 450 marks. Annual intake was stated as around 200." },
            { question: "How does the major split work at UIT?", answer: "Students split by university GPA rather than Grade-12 marks. In semester 4, students are divided into Bachelor of Computer Science and Bachelor of Computer Technology, followed by third-year specific major selection." },
            { question: "What scholarship opportunity is offered?", answer: "Multiple scholarship programs are available. First year students with higher marks (~520) are likely to get offer scholarship from NUS." },
            { question: "What internship and career information was mentioned?", answer: "Internship is mandatory in the curriculum, and company certificates are described as required." }
        ]
    },
    uvs: {
        majors: ["Doctor of Veterinary Medicine (DVM)", "Bachelor of Animal Science (BASc)"],
        location: "UVS is in Yezin, Zeyarthiri Township, Naypyitaw Union Territory, near the old Yangon-Mandalay road.",
        faqs: [
            { question: "What degrees and durations are available at UVS?", answer: "Doctor of Veterinary Medicine (DVM) is five years, and Bachelor of Animal Science (BASc) is four years." },
            { question: "What eligibility requirement is mentioned for UVS?", answer: "Biology-track is required for university entrance." },
            { question: "How is the UVS application route described?", answer: "UVS uses a separate application rather than the regular central university entrance form. Admissions are announced in the newspaper, applicants should apply early, and forms can be submitted in person or by post. Exact documents are announced." },
            { question: "What careers are available after UVS graduation?", answer: "Careers include veterinary clinical practice, animal health, livestock, public or animal production sectors, and field work implied by the degree focus." }
        ]
    },
    wytu: {
        majors: ["Architecture", "Electrical Power Engineering", "Mechatronic Engineering", "Information Technology", "Mechanical Engineering", "Electronic Engineering", "Chemical Engineering", "Textile Engineering", "Civil Engineering", "Metallurgy Engineering", "Agricultural Engineering"],
        location: "WYTU is located in Hlaing Tharyar Township.",
        cutoff: cutoffData.wytu,
        faqs: [
            { question: "How long are WYTU programs, and what degrees are awarded?", answer: "Each major is five years long. Architecture awards B.Arch, while the other majors award B.E." },
            { question: "What clubs and activities are hosted at WYTU?", answer: "Buddhist Family, Rakhine Family, Literature Club, English Club, Sports Club, Chess Club, Cheerleader Club, Arts Association, and Literature Association are hosted, along with sports and literary activities." },
            { question: "What hostel information was mentioned for WYTU?", answer: "Male hostel capacity was described as limited to one dormitory and prioritized for out-of-town students. Two female hostels are available." },
            { question: "How is WYTU compared with COE and ISO technological universities?", answer: "YTU, MTU, NSPU, MMU, UIT, and UTYCC are described as COE institutions. WYTU is grouped with many ISO technological universities. Transfer from ISO to COE is described as not possible." }
        ]
    },
    ytu: {
        cutoff: cutoffData.ytu,
        faqs: [
            { question: "What admission metric was described for YTU?", answer: "The main decision metric was described as the English-Mathematics-Chemistry-Physics four-subject total. Total marks are used only when the four-subject score ties in major transfer or cutoff cases." },
            { question: "How are majors allocated at YTU?", answer: "After university admission, students submit a major preference form. All majors must be ranked, and the major is assigned according to cutoff and marks." },
            { question: "How is the YTU application submitted?", answer: "The form can be sent by post or through a nearby university. Applicants should not write major names such as Civil or EC on the YTU application line until the enrollment or major form stage." },
            { question: "Can students transfer after YTU admission?", answer: "Changing to another technological university or major depends on meeting the target university or major cutoff. Transfer to UIT after YTU admission was described as restricted because of ministry and priority rules." },
            { question: "What uniform information was mentioned for YTU?", answer: "The white top for female and male students was described as flexible. Uniform was said to be required only on requested days." },
            { question: "What opportunities are available for YTU majors?", answer: "All YTU majors were described as having opportunities, including foreign opportunities." },
            { question: "What duration and curriculum note was mentioned for YTU?", answer: "Five-year bachelor completion was mentioned for all majors. This should be verified under the current system because engineering duration can vary by system." }
        ]
    },
    yu: {
        faqs: [
            { question: "How was the University of Yangon described?", answer: "YU was described as a historic university of more than 100 years." },
            { question: "What campuses and facilities are available at YU?", answer: "The main campus, RC2, and hostels are available. Students can use campus Wi-Fi after registration. Two libraries were mentioned: the University of Yangon Library and the Universities' Central Library." },
            { question: "What learning style was described at YU?", answer: "Group projects, presentations, science practicals, and exams are common." },
            { question: "How does hostel application work at YU?", answer: "Students apply for hostel accommodation at enrollment. Hostel residents were said to take the meal plan, and alternative dishes can be requested." },
            { question: "What cost estimate was mentioned for YU students?", answer: "Estimated hostel fee was around 20,000 MMK, food around 150,000 MMK, total monthly cost around 350,000 to 400,000 MMK for hostel students, and around 200,000 MMK for outside students. Prices may rise." },
            { question: "How were day and distance education compared?", answer: "A day degree was recommended for stronger job and tutoring opportunities, while distance education can suit working students. Switching from day to distance was described as possible after trying, but switching from distance to day was not." }
        ]
    },
    yufl: {
        faqs: [
            { question: "What languages are available at YUFL?", answer: "English, Chinese, Korean, Russian, German, French, Thai, and Japanese are taught at YUFL." },
            { question: "How was YU English compared with YUFL English?", answer: "YU English was described as literature-focused, while YUFL English was described as language-focused." },
            { question: "How does major application work at YUFL?", answer: "The order written on the application matters. If the applicant reaches the mark for the first listed major, the student enters that major; if not, the next major is considered." },
            { question: "How were CHRD and Diploma programs distinguished?", answer: "CHRD was described as course or training style, with fees and classes taught by university teachers. Diploma was described as year-based and usually after graduation. Weekend classes discussed were CHRD, not diploma." },
            { question: "What uniform or dress code is mentioned for YUFL?", answer: "No uniform was stated. Female students can wear Myanmar dress and male students can wear longyi, with general dress expectations." }
        ]
    }
};

universities.forEach((university) => {
    const details = universityDetails[university.id];
    if (details) {
        Object.assign(university, details);
    }

    const bachelorMajors = bachelorMajorData[university.id];
    if (bachelorMajors) {
        university.majors = bachelorMajors;
    }

    const address = universityAddresses[university.id];
    if (address) {
        university.location = address;
    }
});

const tabs = [
    { id: 'history', label: 'သမိုင်းကြောင်း' },
    { id: 'majors', label: 'မေဂျာများ' },
    { id: 'cutoff', label: 'ဝင်ခွင့်အမှတ်များ' },
    { id: 'location', label: 'တည်နေရာ' },
    { id: 'achievements', label: 'အောင်မြင်မှုများ' },
    { id: 'why', label: 'Why' }
];

let currentCategory = null;
let currentUniversity = null;
let currentTab = 'history';
let currentImageIndex = 0;

const views = {
    category: document.getElementById('categoryView'),
    list: document.getElementById('listView'),
    detail: document.getElementById('detailView')
};

const categoryGrid = document.getElementById('categoryGrid');
const universityList = document.getElementById('universityList');
const listTitle = document.getElementById('listTitle');
const detailTitle = document.getElementById('detailTitle');
const detailImage = document.getElementById('detailImage');
const detailTabs = document.getElementById('detailTabs');
const detailPanel = document.getElementById('detailPanel');
const detailFaqs = document.getElementById('detailFaqs');
const backToCategories = document.getElementById('backToCategories');
const backToList = document.getElementById('backToList');
const homeLink = document.getElementById('Home');
const pageShell = document.getElementById('pageShell');

function showView(name) {
    Object.entries(views).forEach(([key, element]) => {
        element.classList.toggle('is-active', key === name);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getCategory(id) {
    return categories.find((category) => category.id === id);
}

function getUniversity(id) {
    return universities.find((university) => university.id === id);
}

function renderCategories() {
    categoryGrid.innerHTML = categories.map((category) => `
        <button class="category-card" type="button" data-category-id="${category.id}">
            <i class="fa-solid ${category.icon}" aria-hidden="true"></i>
            <span class="category-card-title">${category.label}</span>
        </button>
    `).join('');
}

function renderUniversityList(categoryId) {
    currentCategory = categoryId;
    const category = getCategory(categoryId);
    const filtered = universities.filter((university) => university.category === categoryId);

    listTitle.textContent = category ? category.label + ' Universities' : 'Universities List';
    universityList.innerHTML = filtered.length
        ? filtered.map((university) => `
            <button class="university-row" type="button" data-university-id="${university.id}">
                <span class="university-name">${university.name}</span>
                <span class="short-badge">${university.short}</span>
                <i class="fa-solid fa-arrow-right row-arrow" aria-hidden="true"></i>
            </button>
        `).join('')
        : '<p class="empty-state">No universities have been added to this category yet.</p>';

    showView('list');
}

function renderDetail(universityId) {
    currentUniversity = getUniversity(universityId);
    currentTab = 'history';
    currentImageIndex = 0;

    if (!currentUniversity) {
        return;
    }

    detailTitle.textContent = currentUniversity.name;
    renderImageSlot();
    renderTabs();
    renderPanel();
    renderFaqs();
    showView('detail');
}

function getUniversityImages(university) {
    if (!university) {
        return [];
    }

    if (Array.isArray(university.images) && university.images.length) {
        return university.images.filter((image) => image && image.src);
    }

    if (university.image) {
        return [{
            src: university.image,
            alt: university.imageAlt || `${university.name} campus image`
        }];
    }

    return [];
}

function renderImageSlot() {
    const images = getUniversityImages(currentUniversity);

    if (!images.length) {
        detailImage.innerHTML = `
            <div class="university-image-placeholder" role="img" aria-label="Image placeholder for ${currentUniversity.name}">
                <div class="image-placeholder-label">Campus Image</div>
                <i class="fa-solid fa-image" aria-hidden="true"></i>
                <span>${currentUniversity.short}</span>
                <small>Add image paths in Main.js: images: [{ src: 'images/${currentUniversity.id}-1.jpg', alt: '${currentUniversity.name} campus image' }]</small>
            </div>
        `;
        return;
    }

    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const image = images[currentImageIndex];
    const imageAlt = image.alt || `${currentUniversity.name} campus image ${currentImageIndex + 1}`;
    const hasMultipleImages = images.length > 1;
    const controls = hasMultipleImages
        ? `
            <button class="image-nav image-nav-prev" type="button" data-image-direction="prev" aria-label="Show previous image">
                <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button class="image-nav image-nav-next" type="button" data-image-direction="next" aria-label="Show next image">
                <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <div class="image-indicators" aria-label="Image ${currentImageIndex + 1} of ${images.length}">
                ${images.map((_, index) => `
                    <button class="image-indicator${index === currentImageIndex ? ' is-active' : ''}" type="button" data-image-index="${index}" aria-label="Show image ${index + 1}" aria-current="${index === currentImageIndex ? 'true' : 'false'}"></button>
                `).join('')}
            </div>
        `
        : '';

    detailImage.innerHTML = `
        <figure class="university-image-frame">
            <img src="${image.src}" alt="${imageAlt}" loading="lazy">
            ${controls}
        </figure>
    `;
}
function renderTabs() {
    detailTabs.innerHTML = tabs.map((tab) => {
        const label = tab.id === 'why' ? `Why ${currentUniversity.short} ?` : tab.label;
        const isActive = tab.id === currentTab;
        return `
            <button class="detail-tab${isActive ? ' is-active' : ''}" type="button" role="tab" aria-selected="${isActive}" data-tab-id="${tab.id}">
                ${label}
            </button>
        `;
    }).join('');
}

function renderInfoContent(content, fallbackText) {
    if (!content) {
        return `<p>${fallbackText}</p>`;
    }

    if (Array.isArray(content)) {
        return `<ul>${content.map((item) => `<li>${item}</li>`).join('')}</ul>`;
    }

    return `<p>${content}</p>`;
}

function renderCutoffTable(section) {
    const headers = section.columns.map((column) => `<th scope="col">${column}</th>`).join('');
    const rows = section.rows.map((row) => `
        <tr>
            ${row.map((cell) => `<td>${cell}</td>`).join('')}
        </tr>
    `).join('');

    return `
        <div class="cutoff-table-scroll" role="region" aria-label="${section.title}" tabindex="0">
            <table class="cutoff-table">
                <thead>
                    <tr>${headers}</tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
    `;
}

function renderCutoffContent(content) {
    const fallbackText = 'ဝင်ခွင့်အမှတ်အချက်အလက် မထည့်ရသေးပါ။';

    if (!content) {
        return `<p>${fallbackText}</p>`;
    }

    if (Array.isArray(content)) {
        return `<ul>${content.map((item) => `<li>${item}</li>`).join('')}</ul>`;
    }

    if (typeof content === 'string') {
        return `<p>${content}</p>`;
    }

    const intro = content.intro ? `<p class="cutoff-intro">${content.intro}</p>` : '';
    const sections = Array.isArray(content.sections) ? content.sections : [];

    if (!sections.length) {
        return `${intro}<p>${fallbackText}</p>`;
    }

    return `
        <div class="cutoff-content">
            ${intro}
            ${sections.map((section) => `
                <section class="cutoff-section" aria-label="${section.title}">
                    <h3>${section.title}</h3>
                    ${section.note ? `<p class="cutoff-note">${section.note}</p>` : ''}
                    ${renderCutoffTable(section)}
                </section>
            `).join('')}
        </div>
    `;
}

function renderPanel() {
    const university = currentUniversity;
    const majorItems = university.majors.map((major) => `<li>${major}</li>`).join('');
    const category = getCategory(university.category);

    const content = {
        history: `
            <h2>History</h2>
            <p>${university.name} (${university.short}) is listed in the ${category.label} category. This section is ready for the university history content you want to publish.</p>
            <p>Keep this page concise, factual, and easy for students to scan before adding longer stories or senior notes.</p>
        `,
        majors: `
            <h2>မေဂျာများ</h2>
            <p>အောက်ပါစာရင်းသည် bachelor/undergraduate degree များသာ ဖြစ်သည်။</p>
            <ul>${majorItems}</ul>
        `,
        cutoff: `
            <h2>ဝင်ခွင့်ဖြတ်မှတ်များ</h2>
            ${renderCutoffContent(university.cutoff)}
        `,
        location: `
            <h2>တည်နေရာ</h2>
            ${renderInfoContent(university.location, 'တည်နေရာအချက်အလက် မထည့်ရသေးပါ။')}
        `,
        achievements: `
            <h2>Achievements</h2>
            <p>Achievement content has not been added yet. Add verified competitions, accreditations, research highlights, and student outcomes here.</p>
        `,
        why: `
            <h2>Why ${university.short} ?</h2>
            <p>${university.short} may be a good choice for students interested in ${category.label.toLowerCase()} programs and related career paths.</p>
            <p>Use this section for practical reasons: strengths, learning environment, opportunities, and what kind of student fits this university.</p>
        `
    };

    detailPanel.innerHTML = content[currentTab];
    detailPanel.focus({ preventScroll: true });
}

function renderFaqs() {
    const faqs = Array.isArray(currentUniversity.faqs) ? currentUniversity.faqs : [];

    detailFaqs.innerHTML = `
        <h2>FAQs</h2>
        ${faqs.length
            ? `<div class="faq-list">
                ${faqs.map((faq) => `
                    <details class="faq-item">
                        <summary>${faq.question}</summary>
                        <p>${faq.answer}</p>
                    </details>
                `).join('')}
            </div>`
            : '<p class="faq-placeholder">FAQs will be added soon.</p>'}
    `;
}

categoryGrid.addEventListener('click', (event) => {
    const card = event.target.closest('[data-category-id]');
    if (!card) return;
    renderUniversityList(card.dataset.categoryId);
});

universityList.addEventListener('click', (event) => {
    const row = event.target.closest('[data-university-id]');
    if (!row) return;
    renderDetail(row.dataset.universityId);
});

detailImage.addEventListener('click', (event) => {
    const navButton = event.target.closest('[data-image-direction]');
    const indicator = event.target.closest('[data-image-index]');
    const images = getUniversityImages(currentUniversity);

    if (!images.length) return;

    if (navButton) {
        const direction = navButton.dataset.imageDirection;
        currentImageIndex = direction === 'next'
            ? (currentImageIndex + 1) % images.length
            : (currentImageIndex - 1 + images.length) % images.length;
        renderImageSlot();
        return;
    }

    if (indicator) {
        currentImageIndex = Number(indicator.dataset.imageIndex);
        renderImageSlot();
    }
});

detailTabs.addEventListener('click', (event) => {
    const tab = event.target.closest('[data-tab-id]');
    if (!tab) return;
    currentTab = tab.dataset.tabId;
    renderTabs();
    renderPanel();
});

backToCategories.addEventListener('click', () => {
    currentCategory = null;
    showView('category');
});

backToList.addEventListener('click', () => {
    if (currentCategory) {
        renderUniversityList(currentCategory);
        return;
    }
    showView('category');
});

window.addEventListener('pageshow', () => {
    pageShell.classList.remove('animate');
});

homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    pageShell.classList.remove('animate');
    void pageShell.offsetWidth;
    pageShell.classList.add('animate');
});

pageShell.addEventListener('animationend', (event) => {
    if (event.animationName === 'fadeOut') {
        window.location.href = homeLink.getAttribute('href');
    }
});

renderCategories();
