// 1. Run two identical environments (Blue = current version, Green = new version) each hosting a separate Node.js app version.

// 2. Put both behind a load balancer but route production traffic only to the Blue environment initially.

// 3. Deploy and test the Green version, then switch the load balancer to Green (zero-downtime); keep Blue as a fallback until confident.