module.exports = {
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGO_URL || 'localhost/cheerladders',
  trackingId: process.env.TRACKING_ID || '',
};
