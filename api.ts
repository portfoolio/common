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
  create: { path: 'http://localhost:3001/journey-item/create-item/:id', method: 'POST' },
  find: { path: 'http://localhost:3001/journey-item/find-item/:id', method: 'GET' },
  update: { path: 'http://localhost:3001/journey-item/', method: 'PUT' },
  delete: { path: 'http://localhost:3001/journey-item/delete/:journeyId/:id', method: 'DELETE' },
  list: { path: 'http://localhost:3001/journey-item/list-items/:journeyId', method: 'GET' },
};

export const Project: 
  { 
    create: { path: string, method: string }, 
    find: { path: string, method: string }, 
    update: { path: string, method: string }, 
    delete: { path: string, method: string }, 
    list: { path: string, method: string   } 
 } = 
 {
  create: { path: 'http://localhost:3001/project/', method: 'POST' },
  find: { path: 'http://localhost:3001/project/:id', method: 'GET' },
  update: { path: 'http://localhost:3001/project/', method: 'PUT' },
  delete: { path: 'http://localhost:3001/project/:id', method: 'DELETE' },
  list: { path: 'http://localhost:3001/project/', method: 'GET' },
};

export const ProjectHeader: 
  { 
    find: { path: string, method: string }, 
    update: { path: string, method: string   } 
 } = 
 {
  find: { path: 'http://localhost:3001/project-header/', method: 'GET' },
  update: { path: 'http://localhost:3001/project-header/', method: 'PUT' },
};

export const Testimonial: 
  { 
    create: { path: string, method: string }, 
    find: { path: string, method: string }, 
    update: { path: string, method: string }, 
    delete: { path: string, method: string }, 
    list: { path: string, method: string   } 
 } = 
 {
  create: { path: 'http://localhost:3001/testimonial/', method: 'POST' },
  find: { path: 'http://localhost:3001/testimonial/:id', method: 'GET' },
  update: { path: 'http://localhost:3001/testimonial/', method: 'PUT' },
  delete: { path: 'http://localhost:3001/testimonial/:id', method: 'DELETE' },
  list: { path: 'http://localhost:3001/testimonial/', method: 'GET' },
};

export const TestimonialHeader: 
  { 
    find: { path: string, method: string }, 
    update: { path: string, method: string   } 
 } = 
 {
  find: { path: 'http://localhost:3001/testimonial-header/', method: 'GET' },
  update: { path: 'http://localhost:3001/testimonial-header/', method: 'PUT' },
};

export const Technology: 
  { 
    create: { path: string, method: string }, 
    find: { path: string, method: string }, 
    update: { path: string, method: string }, 
    delete: { path: string, method: string }, 
    list: { path: string, method: string   } 
 } = 
 {
  create: { path: 'http://localhost:3001/technology/', method: 'POST' },
  find: { path: 'http://localhost:3001/technology/:id', method: 'GET' },
  update: { path: 'http://localhost:3001/technology/', method: 'PUT' },
  delete: { path: 'http://localhost:3001/technology/:id', method: 'DELETE' },
  list: { path: 'http://localhost:3001/technology/', method: 'GET' },
};

export const TechnologyHeader: 
  { 
    find: { path: string, method: string }, 
    update: { path: string, method: string   } 
 } = 
 {
  find: { path: 'http://localhost:3001/technology-header/', method: 'GET' },
  update: { path: 'http://localhost:3001/technology-header/', method: 'PUT' },
};

export const Blog: 
  { 
    create: { path: string, method: string }, 
    find: { path: string, method: string }, 
    update: { path: string, method: string }, 
    delete: { path: string, method: string }, 
    list: { path: string, method: string   } 
 } = 
 {
  create: { path: 'http://localhost:3001/blog/', method: 'POST' },
  find: { path: 'http://localhost:3001/blog/:id', method: 'GET' },
  update: { path: 'http://localhost:3001/blog/', method: 'PUT' },
  delete: { path: 'http://localhost:3001/blog/:id', method: 'DELETE' },
  list: { path: 'http://localhost:3001/blog/', method: 'GET' },
};

export const BlogHeader: 
  { 
    find: { path: string, method: string }, 
    update: { path: string, method: string   } 
 } = 
 {
  find: { path: 'http://localhost:3001/blog-header/', method: 'GET' },
  update: { path: 'http://localhost:3001/blog-header/', method: 'PUT' },
};

export const Setting: 
  { 
    find: { path: string, method: string }, 
    update: { path: string, method: string   } 
 } = 
 {
  find: { path: 'http://localhost:3001/setting/', method: 'GET' },
  update: { path: 'http://localhost:3001/setting/', method: 'PUT' },
};

export const Client: 
  { 
    fetchAbout: { path: string, method: string }, 
    fetchService: { path: string, method: string }, 
    fetchJourney: { path: string, method: string }, 
    fetchProject: { path: string, method: string   } 
 } = 
 {
  fetchAbout: { path: 'http://localhost:3001/client/fetch-about', method: 'GET' },
  fetchService: { path: 'http://localhost:3001/client/fetch-service', method: 'GET' },
  fetchJourney: { path: 'http://localhost:3001/client/fetch-journey', method: 'GET' },
  fetchProject: { path: 'http://localhost:3001/client/fetch-project', method: 'GET' },
};
