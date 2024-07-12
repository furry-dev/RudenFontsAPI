export type Iso639_2 =
    "sqi" | "ara" | "ben" | "zho" | "nld" | "eng" | "fra" | "deu" | "ell" | "grn" |
    "hin" | "ita" | "jpn" | "kor" | "msa" | "fas" | "por" | "ron" | "rus" | "srp" |
    "spa" | "swa" | "swe" | "tam" | "tur" | "ukr" | "urd" | "vie" | "yid"

export function isIso639_2(value: string): value is Iso639_2 {
    const checklist: Iso639_2[] = [
        "sqi", "ara", "ben", "zho", "nld", "eng", "fra", "deu", "ell", "grn",
        "hin", "ita", "jpn", "kor", "msa", "fas", "por", "ron", "rus", "srp",
        "spa", "swa", "swe", "tam", "tur", "ukr", "urd", "vie", "yid"
    ]

    return (checklist).includes(value as Iso639_2)
}

export type Iso639_1 =
    "sq" | "ar" | "bn" | "zh" | "nl" | "en" | "fr" | "de" | "el" | "gn" |
    "hi" | "it" | "ja" | "ko" | "ms" | "fa" | "pt" | "ro" | "ru" | "sr" |
    "es" | "sw" | "sv" | "ta" | "tr" | "uk" | "ur" | "vi" | "yi"

export function isIso639_1(value: string): value is Iso639_1 {
    const checklist: Iso639_1[] = [
        "sq", "ar", "bn", "zh", "nl", "en", "fr", "de", "el", "gn",
        "hi", "it", "ja", "ko", "ms", "fa", "pt", "ro", "ru", "sr",
        "es", "sw", "sv", "ta", "tr", "uk", "ur", "vi", "yi"
    ]

    return (checklist).includes(value as Iso639_1)
}

interface ILangData {
    name: string
    iso_639_1: Iso639_1
    iso_639_2: Iso639_2
}

export const languages: ILangData[] = [
    {
        name: "shqiptar",
        iso_639_1: "sq",
        iso_639_2: "sqi"
    },
    {
        name: "العربية",
        iso_639_1: "ar",
        iso_639_2: "ara"
    },
    {
        name: "বাংলা",
        iso_639_1: "bn",
        iso_639_2: "ben"
    },
    {
        name: "中文",
        iso_639_1: "zh",
        iso_639_2: "zho"
    },
    {
        name: "Nederlandse",
        iso_639_1: "nl",
        iso_639_2: "nld"
    },
    {
        name: "English",
        iso_639_1: "en",
        iso_639_2: "eng"
    },
    {
        name: "Français",
        iso_639_1: "fr",
        iso_639_2: "fra"
    },
    {
        name: "German",
        iso_639_1: "de",
        iso_639_2: "deu"
    },
    {
        name: "ελληνική",
        iso_639_1: "el",
        iso_639_2: "ell"
    },
    {
        name: "Avañe'ẽ",
        iso_639_1: "gn",
        iso_639_2: "grn"
    },
    {
        name: "हिंदी",
        iso_639_1: "hi",
        iso_639_2: "hin"
    },
    {
        name: "Italiano",
        iso_639_1: "it",
        iso_639_2: "ita"
    },
    {
        name: "日本語",
        iso_639_1: "ja",
        iso_639_2: "jpn"
    },
    {
        name: "한국어",
        iso_639_1: "ko",
        iso_639_2: "kor"
    },
    {
        name: "Bahasa Melayu",
        iso_639_1: "ms",
        iso_639_2: "msa"
    },
    {
        name: "پارسی",
        iso_639_1: "fa",
        iso_639_2: "fas"
    },
    {
        name: "Português",
        iso_639_1: "pt",
        iso_639_2: "por"
    },
    {
        name: "Română",
        iso_639_1: "ro",
        iso_639_2: "ron"
    },
    {
        name: "Русский",
        iso_639_1: "ru",
        iso_639_2: "rus"
    },
    {
        name: "Српски",
        iso_639_1: "sr",
        iso_639_2: "srp"
    },
    {
        name: "Español",
        iso_639_1: "es",
        iso_639_2: "spa"
    },
    {
        name: "Kiswahili",
        iso_639_1: "sw",
        iso_639_2: "swa"
    },
    {
        name: "Svenska",
        iso_639_1: "sv",
        iso_639_2: "swe"
    },
    {
        name: "தமிழ்",
        iso_639_1: "ta",
        iso_639_2: "tam"
    },
    {
        name: "Türkçe",
        iso_639_1: "tr",
        iso_639_2: "tur"
    },
    {
        name: "Українська",
        iso_639_1: "uk",
        iso_639_2: "ukr"
    },
    {
        name: "اردو",
        iso_639_1: "ur",
        iso_639_2: "urd"
    },
    {
        name: "Tiếng Việt",
        iso_639_1: "vi",
        iso_639_2: "vie"
    },
    {
        name: "ייִדיש",
        iso_639_1: "yi",
        iso_639_2: "yid"
    }
]

export const LocalizedSupports: Iso639_2[] = ["rus", "eng", "ukr"]

export function convert2CharCode(iso639_1: Iso639_1) {
    return languages.find(value => value.iso_639_1 === iso639_1)?.iso_639_2
}
