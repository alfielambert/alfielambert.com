import { defineCloudflareConfig } from '@opennextjs/cloudflare'

// This site has no ISR/revalidate usage — everything is either fully
// static or explicitly `force-static` — so the default (no incremental
// cache override) is sufficient. No R2 bucket needed.
export default defineCloudflareConfig()
