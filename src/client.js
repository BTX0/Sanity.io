import client from "@sanity/client"

export default client({
  projectId: "ummng9wz",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-08-05",
})
