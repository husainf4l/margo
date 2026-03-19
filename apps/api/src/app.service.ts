import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCompanyInfo() {
    return {
      name: 'Margo Group',
      description: 'Distributor of high-quality beauty and personal care products headquartered in Amman, Jordan',
      country: 'Jordan'
    };
  }
}
