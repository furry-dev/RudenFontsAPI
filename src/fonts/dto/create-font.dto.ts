import { FontCategory, FontVariants } from "../../types/font"

export class CreateFontDto {
    family: string
    categories: FontCategory[]
    langs: string[]
    variants: FontVariants[]
    files: { [key in FontVariants]?: string }
    sizeCoeff: number
}
