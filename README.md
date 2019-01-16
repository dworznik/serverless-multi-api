

### Domain configuration

1. Edit `domain.yml` and provide the domain name and the cert's Arn.
1. Run `npx sls deploy` to create the custom domain config on API Gateway (this doesn't create a DNS record)


### Service deployment

1. To deploy a service, run `npx sls deploy` in its subdirectory
1. Services are available at the `/a` and `/b` base paths configured in their `serverless.yml` (e.g.: `https://api.example.org/a/hello`)
