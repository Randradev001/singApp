

import { z } from 'zod';

export const CompanySearchSchema = z.object({
  company: z.string().trim().min(2, 'Mínimo 2 caracteres'),
});