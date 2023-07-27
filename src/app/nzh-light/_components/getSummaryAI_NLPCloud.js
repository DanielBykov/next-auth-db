const NLPCloudClient = require('nlpcloud');
export const getSumAI_NLPCloud = async (text) => {
  const client = new NLPCloudClient('bart-large-cnn','cfae2627264016b199d61532bc12dd5a5a7fbc90', false)
  let t = text.slice(0, 2000)
  try {
    const response = await client.summarization(
      t,
      'small'
    )
    console.log('d256 summarization:', response.data)
    return response.data.summary_text
  } catch(err){
    console.error(err.response.status);
    console.error(err.response.data.detail);
  }
}
export const getSentimentAI_NLPCloud = async (text) => {
  const client = new NLPCloudClient('distilbert-base-uncased-emotion','cfae2627264016b199d61532bc12dd5a5a7fbc90', false)
  let t = text.slice(0, 2000)
  try {
    const response =   await client.sentiment(t)
    return response.data.scored_labels
  } catch(err){
    console.log('d256 getSentimentAI_NLPCloud err:', err)
  }
}
