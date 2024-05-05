type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
    }
    
    function createOrUpdateUser(initialValues: User, updateData:Partial<User>): User {
        return {
         ...initialValues,
         ...updateData,
        }
    
    }
    
  
    