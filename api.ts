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
    find: { path: string, method: string }, 
    update: { path: string, method: string   } 
 } = 
 {
  find: { path: 'http://localhost:3001/about/', method: 'GET' },
  update: { path: 'http://localhost:3001/about/', method: 'PUT' },
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

export const ServiceHeader: 
  { 
    find: { path: string, method: string }, 
    update: { path: string, method: string   } 
 } = 
 {
  find: { path: 'http://localhost:3001/service-header/', method: 'GET' },
  update: { path: 'http://localhost:3001/service-header/', method: 'PUT' },
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

export const Journey: 
  { 
    create: { path: string, method: string }, 
    find: { path: string, method: string }, 
    update: { path: string, method: string }, 
    delete: { path: string, method: string }, 
    list: { path: string, method: string   } 
 } = 
 {
  create: { path: 'http://localhost:3001/journey/', method: 'POST' },
  find: { path: 'http://localhost:3001/journey/:id', method: 'GET' },
  update: { path: 'http://localhost:3001/journey/', method: 'PUT' },
  delete: { path: 'http://localhost:3001/journey/:id', method: 'DELETE' },
  list: { path: 'http://localhost:3001/journey/', method: 'GET' },
};

export const JourneyHeader: 
  { 
    find: { path: string, method: string }, 
    update: { path: string, method: string   } 
 } = 
 {
  find: { path: 'http://localhost:3001/journey-header/', method: 'GET' },
  update: { path: 'http://localhost:3001/journey-header/', method: 'PUT' },
};

export const JourneyItem: 
  { 
    create: { path: string, method: string }, 
    find: { path: string, method: string }, 
    update: { path: string, method: string }, 
    delete: { path: string, method: string }, 
    list: { path: string, method: string   } 
 } = 
 {
  create: { path: 'http://localhost:3001/journey-item/:id/create-item', method: 'POST' },
  find: { path: 'http://localhost:3001/journey-item/:id/find-item', method: 'GET' },
  update: { path: 'http://localhost:3001/journey-item/', method: 'PUT' },
  delete: { path: 'http://localhost:3001/journey-item/:journeyId/:id', method: 'DELETE' },
  list: { path: 'http://localhost:3001/journey-item/:journeyId/list-items', method: 'GET' },
};
