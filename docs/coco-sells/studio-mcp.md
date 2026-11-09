---
title: Brief pour un autre modèle
---

# Coco Form Studio

Give this page to the model that should connect a website form to the CRM. Ask one question at a time. Save nothing until the person says yes.

## Connect

`POST https://crm-backend-chi-ecru.vercel.app/api/mcp/forms`

Header: `x-cocoinbox-api-key: <company key>`, or `Authorization: Bearer <token>`.

Protocol MCP `2024-11-05`, JSON-RPC. Call `initialize`, then `notifications/initialized`, then `tools/list`, then `tools/call`. Send the `mcp-session-id` from `initialize` on the later calls.

```json
{
  "mcpServers": {
    "coco-forms": {
      "url": "https://crm-backend-chi-ecru.vercel.app/api/mcp/forms",
      "headers": { "x-cocoinbox-api-key": "YOUR_KEY" }
    }
  }
}
```

## Tools

`studio_next` writes nothing. Call it first, then again after every answer. Carry forward every argument you already know. Show the person only the `say` sentence. If they write in English, translate `say` and keep the same choice ids. Do not show the JSON.

`studio_apply` is the only write. Call it when `ready` is true and the person has said yes. Send the same arguments plus `confirmed: true`.

## Questions, in this order

1. **Project.** `projectChoice`: `same` (the latest site project), `new` (ask for a short name), or `existing` (use an id from the returned list).
2. **Website.** `websiteChoice`: `existing`, or `new` with an `https://` address. If that domain is already a site, ask before creating another.
3. **Form.** `formChoice`: `new`, or `edit` with the `formKey`.
4. **Fields**, copied from the website.

A name that already exists is a question, not a silent overwrite.

## Fields

Send the website form as `fieldTable` or as `fields`. Do not rename labels or ids. Do not invent select options. `text (default)` stays `text`, even when the label is Téléphone. An empty select stays `options: []`. A honeypot becomes hidden. One email field is required, and email is always required. Twenty-four fields at most. The list you send replaces the whole form, so send every field.

A pasted table is read as label, id, HTML type, Yes or No:

```text
Nom name text Yes
Email email email Yes
Téléphone phone text No
Société company text No
Offre service select No
Budget budget select No
Projet message textarea Yes
Site company_website text No
```

`phone` stays `phone`. It is `tel` only when the website says `tel`. A label or id containing honeypot is hidden. A filled honeypot does not create a lead.

These ids fill the contact: `email`, `firstName`, `lastName`, `phone`, `company`, `budget`, `message`. The id `name` is split into first and last name. Any other id is kept in the contact note as `Label: value`.

## After a yes

The reply contains `href`, like `/projets/{project}/sites/{website}/formulaires/frm_…`. The page is `https://crm.cocoinbox.com` plus that path. If `apiSecret` is present, show it once and say it will not be shown again.
