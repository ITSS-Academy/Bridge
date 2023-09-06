import { Test, TestingModule } from '@nestjs/testing';
import { AuthAccountService } from './auth-accounts.service';

describe('AuthAccountsService', () => {
  let service: AuthAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthAccountService],
    }).compile();

    service = module.get<AuthAccountService>(AuthAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
