/**
 * Created by Elmer on 27-1-2017.
 */
export interface AWSUser {
  name: AWSUserName;
  email: string;
}

interface  AWSUserName {
  title: string;
  first: string;
  last: string;
}
