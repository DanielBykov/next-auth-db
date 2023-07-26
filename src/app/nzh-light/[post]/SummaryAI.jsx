export const getAI = async (text) => {
  const NLPCloudClient = require('nlpcloud');
  const client = new NLPCloudClient('bart-large-cnn','cfae2627264016b199d61532bc12dd5a5a7fbc90', false)
  try {
    const response = await client.summarization(
      text,
      'small'
    )
    console.log('d256 sum:', response.data)
    return response.data.summary_text
  } catch(err){
    console.error(err.response.status);
    console.error(err.response.data.detail);
  }
  // .then(function (response) {
  //   console.log(response.data);
  // }).catch(function (err) {
  //   console.error(err.response.status);
  //   console.error(err.response.data.detail);
  // });
}
