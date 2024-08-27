/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { Type } from "class-transformer";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

@InputType()
class TweetUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  authorId?: string | null;

  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutTweetsInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutTweetsInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutTweetsInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutTweetsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => LikeUpdateManyWithoutTweetsInput,
  })
  @ValidateNested()
  @Type(() => LikeUpdateManyWithoutTweetsInput)
  @IsOptional()
  @Field(() => LikeUpdateManyWithoutTweetsInput, {
    nullable: true,
  })
  likes?: LikeUpdateManyWithoutTweetsInput;
}

export { TweetUpdateInput as TweetUpdateInput };
