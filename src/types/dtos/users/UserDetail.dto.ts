import { UserStatus } from "../UserStatus.enum";
import { UserRole } from "../UserRole.enum";

export interface UserDetailDto {
  id: string;

  status: UserStatus;

  role: UserRole;

  name?: string;

  email?: string;

  department?: string;

  studentId?: string;

  createdAt: Date;
  
  updatedAt: Date;
}