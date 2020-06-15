import AWS from 'aws-sdk'

export default {
  async save (file, fileName, type) {
    const BUCKET_NAME = 'ipetz'
    const AWS_ACCESS_KEY_ID = 'AKIAQ36E365I33YP7XJG'
    const AWS_SECRET_ACCESS_KEY = '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'



    const s3 = new AWS.S3({ accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY })
    // Parametros objeto upload
    const params = {
      Bucket: BUCKET_NAME,
      Key: fileName,
      Body: file
    }
    return new Promise((resolve, reject) => {
      s3.putObject(params, (err, data) => {
        if (err) {
          reject(new Error(err.message))
        }
        resolve({ message: 'Upload realizado com sucesso', data })
      })
    })
  },
  async getUrl (fileName) {
    const BUCKET_NAME = 'ipetz'
    const AWS_ACCESS_KEY_ID = 'AKIAQ36E365I33YP7XJG'
    const AWS_SECRET_ACCESS_KEY = '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'



    const s3 = new AWS.S3({ accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY })

    let url = s3.getSignedUrl('getObject', { Bucket: BUCKET_NAME, Key: fileName })

    // Trata caso em que url vem com parametros a mais
    url = url.split('?')[0]

    return url
  }
}
