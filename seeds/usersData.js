const { User } = require('../models');

const userdata = [
  {
    id: 1,
    email: '123@123.com',
    password: '$2b$10$cEDsviOaKgAM9Jf.iNPoveGNkzcBxrgM7m2xziZg2w1SKQykY/w8e',
    created_at: '2023-11-14 09:40:16',
    updated_at: '2023-11-14 09:40:16'
  },
  {
    id: 2,
    email: 'Test@stuff.test',
    password: '$2b$10$iCxWGFC59Q5ag5Xc/SucCeVqU/5614rsuiiJQA47wElHUKoLRaosG',
    created_at: '2023-11-14 09:40:23',
    updated_at: '2023-11-14 09:40:23'
  },
  {
    id: 3,
    email: 'anothersample@what.com',
    password: '$2b$10$QFb.enE76jn1wuOvd3HETevQuz61ab0mvYnbIg1LCbnkBsp6l78iq',
    created_at: '2023-11-14 09:40:35',
    updated_at: '2023-11-14 09:40:35'
  },


];

const seedUser= () => User.bulkCreate(userdata);

module.exports = seedUser;
