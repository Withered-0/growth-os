SELECT
    column_name,
    data_type,
    udt_name
FROM information_schema.columns
WHERE table_name = 'website_audits'
AND column_name IN ('issues', 'recommendations', 'raw_response');
