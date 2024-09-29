import axios, { AxiosResponse } from 'axios';
import { RegisterDto } from '@/types/dtos/auth/Register.dto';
import { AuthDetailDto } from '@/types/dtos/auth/AuthDetail.dto';

export const registerUser = async (registerData: RegisterDto): Promise<AuthDetailDto | void> => {
  try {
    const response: AxiosResponse<AuthDetailDto> = await axios.post('/auth/register', registerData);
    console.log('회원가입 성공:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('회원가입 실패:', error.response?.data);
  }
}