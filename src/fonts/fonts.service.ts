import { Injectable } from "@nestjs/common"
import { CreateFontDto } from "./dto/create-font.dto"
import { UpdateFontDto } from "./dto/update-font.dto"
import { FontsDatabase } from "../db/fakeDB"

@Injectable()
export class FontsService {
    create(createFontDto: CreateFontDto) {
        return "This action adds a new font"
    }

    findAll() {
        return FontsDatabase
    }

    findOne(family: string) {
        return FontsDatabase.find(value => value.family === family)
    }

    update(id: number, updateFontDto: UpdateFontDto) {
        return `This action updates a #${id} font`
    }

    remove(id: number) {
        return `This action removes a #${id} font`
    }
}
