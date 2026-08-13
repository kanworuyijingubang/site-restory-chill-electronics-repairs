# Consent and analytics test plan

- Configuration key: `NEXT_PUBLIC_GA_MEASUREMENT_ID`; no measurement ID is committed in source.
- When the key is absent, no analytics script and no consent banner are rendered.
- When the key is present and no choice is stored, the consent banner offers equally available Reject and Accept actions.
- Reject stores `restory-consent=rejected` and must not inject `googletagmanager.com` or initialize `gtag`.
- Accept stores `restory-consent=accepted`; only then may the Google tag script load, with IP anonymization enabled.
- A saved valid choice is restored from local storage. Invalid values are ignored.
- Privacy, cookies, terms, disclaimer and contact/corrections routes are reachable from the global footer.
- Production browser QA must verify the unset-ID baseline, then the configured-ID accept/reject branches if a GA4 ID is provisioned.
