
export default process.env.API_HOST || process.env.NODE_ENV === 'production' ? 'https://sauce-num-back.herokuapp.com' : 'http://localhost:5000';
