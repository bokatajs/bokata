const { request } = require('@bokata/request');

const generateMsbfToken = async (req, res) => {
  const { userId } = req.params;
  console.debug(`generateMsbfToken > userId: ${userId}`);
  try {
    const options = {
      url: 'https://directline.botframework.com/v3/directline/tokens/generate',
      method: 'POST',
      headers: {
        authorization: `Bearer ${process.env.MSBF_BOT_APP_SECRET}`,
      },
    };
    const result = await request(options);

    return res.json(result);
  } catch (error) {
    console.error(`generateMsbfToken: ${error.message}`);
    return res.json({});
  }
};

module.exports = generateMsbfToken;
