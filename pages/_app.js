import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

// Initialize the Amazon Cognito credentials provider
// AWS.config.region = 'us-east-1'; // Region
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-east-1:4d72a32c-4805-45eb-b449-be15c70357b5',
// });

// test permissions
// {
//   "Version": "2012-10-17",
//   "Id": "Policy1657765945022",
//   "Statement": [
//       {
//           "Sid": "Stmt1657765741819",
//           "Effect": "Allow",
//           "Principal": "*",
//           "Action": "s3:Get*",
//           "Resource": "arn:aws:s3:::pearie-sol-images"
//       },
//       {
//           "Sid": "Stmt1657765741812",
//           "Effect": "Deny",
//           "Principal": "*",
//           "Action": "s3:*",
//           "Resource": "arn:aws:s3:::pearie-sol-images",
//           "Condition": {
//               "StringNotEquals": {
//                   "aws:SourceIp": "76.76.21.21"
//               }
//           }
//       }
//   ]
// }