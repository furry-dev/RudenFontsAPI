import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common"
import { FontsService } from "./fonts.service"
import { CreateFontDto } from "./dto/create-font.dto"
import { UpdateFontDto } from "./dto/update-font.dto"

@Controller("fonts")
export class FontsController {
    constructor(private readonly fontsService: FontsService) {
    }

    @Post()
    create(@Body() createFontDto: CreateFontDto) {
        return this.fontsService.create(createFontDto)
    }

    @Get()
    findAll() {
        return this.fontsService.findAll()
    }

    @Get(":family")
    findOne(@Param("family") family: string) {
        const font = this.fontsService.findOne(family)
        if (!font) {
            throw new NotFoundException("Invalid font id")
        }
        return font
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updateFontDto: UpdateFontDto) {
        return this.fontsService.update(+id, updateFontDto)
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.fontsService.remove(+id)
    }
}
