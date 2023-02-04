import { BadRequestException, PipeTransform } from "@nestjs/common";
import { SurveyStatus } from "../survey-status.enum";

export class SurveyStatusValidationPipe implements PipeTransform {

    readonly StatusOptions = [
        SurveyStatus.ON_GOING,
        SurveyStatus.END
    ]
    transform(value: any) {
       value = value.toUpperCase();

       if(!this.isStatusValid(value)) {
        throw new BadRequestException(`${value} isn't in the status options`)
       }

       return value;
    }

    private isStatusValid(status: any) {
        const index = this.StatusOptions.indexOf(status);
        return index !== -1
    }
}