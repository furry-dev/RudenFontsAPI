import { Iso639_2 } from "./languages"

export type FontCategory = "Bubble" | "Sound" | "Decorative"

export type FontVariants = "Regular" | "Bold" | "Italic" | "BoldItalic" | "Light" | "LightItalic"

export interface Font {
    _id: string,
    family: string,
    categories: FontCategory[],
    langs: Iso639_2[],
    files: { [key in FontVariants]?: string },
    sizeCoeff: number,
    freeCommercial: boolean
}