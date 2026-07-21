const pool = require("../config/db");

async function createAudit(url) {
    const query = `
        INSERT INTO audits(url)
        VALUES($1)
        RETURNING *;
    `;

    const { rows } = await pool.query(query, [url]);

    return rows[0];
}

async function updateAudit(id, result) {

    const query = `
        UPDATE audits
        SET
            status='completed',
            overall_score=$2,
            grade=$3,
            report=$4,
            updated_at=NOW()
        WHERE id=$1
        RETURNING *;
    `;

    const { rows } = await pool.query(query, [
        id,
        result.overall,
        result.grade,
        result
    ]);

    return rows[0];
}

async function getAudit(id){

    const { rows } = await pool.query(
        "SELECT * FROM audits WHERE id=$1",
        [id]
    );

    return rows[0];

}

module.exports = {
    createAudit,
    updateAudit,
    getAudit
};