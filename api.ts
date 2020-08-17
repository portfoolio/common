export const Auth: { login: { path: string, method: string } } = {
  login: { path: 'http://localhost:3001/auth/login', method: 'POST' },
};

export const Header: 
  { 
    find: { path: string, method: string }, 
    update: { path: string, method: string   } 
 } = 
 {
  find: { path: 'http://localhost:3001/header/', method: 'GET' },
  update: { path: 'http://localhost:3001/header/', method: 'PUT' },
};

export const About: 
  { 
    create: { path: string, method: string }, 
    find: { path: string, method: string }, 
    update: { path: string, method: string }, 
    delete: { path: string, method: string }, 
    list: { path: string, method: string   } 
 } = 
 {
  create: { path: 'http://localhost:3001/about/', method: 'POST' },
  find: { path: 'http://localhost:3001/about/:id', method: 'GET' },
  update: { path: 'http://localhost:3001/about/', method: 'PUT' },
  delete: { path: 'http://localhost:3001/about/:id', method: 'DELETE' },
  list: { path: 'http://localhost:3001/about/', method: 'GET' },
};

export const Service: 
  { 
    create: { path: string, method: string }, 
    find: { path: string, method: string }, 
    update: { path: string, method: string }, 
    delete: { path: string, method: string }, 
    list: { path: string, method: string   } 
 } = 
 {
  create: { path: 'http://localhost:3001/service/', method: 'POST' },
  find: { path: 'http://localhost:3001/service/:id', method: 'GET' },
  update: { path: 'http://localhost:3001/service/', method: 'PUT' },
  delete: { path: 'http://localhost:3001/service/:id', method: 'DELETE' },
  list: { path: 'http://localhost:3001/service/', method: 'GET' },
};

export const Contact: 
  { 
    create: { path: string, method: string }, 
    find: { path: string, method: string }, 
    update: { path: string, method: string }, 
    delete: { path: string, method: string }, 
    list: { path: string, method: string   } 
 } = 
 {
  create: { path: 'http://localhost:3001/contact/', method: 'POST' },
  find: { path: 'http://localhost:3001/contact/:id', method: 'GET' },
  update: { path: 'http://localhost:3001/contact/', method: 'PUT' },
  delete: { path: 'http://localhost:3001/contact/:id', method: 'DELETE' },
  list: { path: 'http://localhost:3001/contact/', method: 'GET' },
};

export const Counter: 
  { 
    create: { path: string, method: string }, 
    find: { path: string, method: string }, 
    update: { path: string, method: string }, 
    delete: { path: string, method: string }, 
    list: { path: string, method: string   } 
 } = 
 {
  create: { path: 'http://localhost:3001/counter/', method: 'POST' },
  find: { path: 'http://localhost:3001/counter/:id', method: 'GET' },
  update: { path: 'http://localhost:3001/counter/', method: 'PUT' },
  delete: { path: 'http://localhost:3001/counter/:id', method: 'DELETE' },
  list: { path: 'http://localhost:3001/counter/', method: 'GET' },
};
