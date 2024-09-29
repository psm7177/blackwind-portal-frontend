import { UserDetailDto } from "../users/UserDetail.dto";

export interface AuthDetailDto {
  success: boolean;

  user: UserDetailDto;
}