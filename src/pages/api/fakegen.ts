// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const imageURLs = [
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-QFUUCW4fXoEJxW7B2jCFgIHy/user-X3mqCArQyy4DBGxrc51DFYZB/img-qZ9MkxoIGOayPNdYhDcmxRqf.png?st=2023-02-17T15%3A38%3A36Z&se=2023-02-17T17%3A38%3A36Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-16T21%3A17%3A48Z&ske=2023-02-17T21%3A17%3A48Z&sks=b&skv=2021-08-06&sig=S9Gs6IhvL7hiF%2Bz%2BloWBRvzHqrzvNDUqHplKbm6e3pA%3D",
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-QFUUCW4fXoEJxW7B2jCFgIHy/user-X3mqCArQyy4DBGxrc51DFYZB/img-yCu9KKT3K0oU42iAgluJ2OmF.png?st=2023-02-17T15%3A38%3A36Z&se=2023-02-17T17%3A38%3A36Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-16T21%3A17%3A48Z&ske=2023-02-17T21%3A17%3A48Z&sks=b&skv=2021-08-06&sig=hVHaSia39EqGeY0TRT3%2BLWRS/cRrPfJ%2BtSr6quwIhiA%3D",
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-QFUUCW4fXoEJxW7B2jCFgIHy/user-X3mqCArQyy4DBGxrc51DFYZB/img-7tTeKGTyIJOoXB8Y4GjgWuNA.png?st=2023-02-17T15%3A38%3A36Z&se=2023-02-17T17%3A38%3A36Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-16T21%3A17%3A48Z&ske=2023-02-17T21%3A17%3A48Z&sks=b&skv=2021-08-06&sig=d1WzlHdqDrDiaUQTjYjZv4CwtG97wWmzgbTeuw%2BoVMQ%3D",
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-QFUUCW4fXoEJxW7B2jCFgIHy/user-X3mqCArQyy4DBGxrc51DFYZB/img-daZtrgMXJ74N0jmT0GPnlIAB.png?st=2023-02-17T15%3A38%3A36Z&se=2023-02-17T17%3A38%3A36Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-16T21%3A17%3A48Z&ske=2023-02-17T21%3A17%3A48Z&sks=b&skv=2021-08-06&sig=pvEsOzFdpv2xIgHAMRt0/L2efutZtz4nik4ceS7gNDQ%3D",
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-QFUUCW4fXoEJxW7B2jCFgIHy/user-X3mqCArQyy4DBGxrc51DFYZB/img-I0p22JtuRgT0B4oB0IqBcbGD.png?st=2023-02-17T15%3A38%3A36Z&se=2023-02-17T17%3A38%3A36Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-16T21%3A17%3A48Z&ske=2023-02-17T21%3A17%3A48Z&sks=b&skv=2021-08-06&sig=Gvxo/LLZPXFoT8nPaSXSmhJxsiDEeucpNZ4zUKORpSY%3D",
  ];

  return res.status(200).json(imageURLs);
}
