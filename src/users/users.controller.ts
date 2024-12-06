
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getAllUsers() {
        return [{ id: 1, name: 'John Doe' }];
    }
}

// Usage Example:
// Call GET /users API to retrieve the user list.
