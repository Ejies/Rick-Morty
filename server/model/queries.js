/**
 * @name addComment
 * @description - adds a comment to an episode
 * @param {object} data
 * @returns the object query
 */

export const addComment = data => ({
    text: `INSERT INTO comments (
      episode,
      comment,
      idaddress,
      date
    ) VALUES ($1, $2, $3) RETURNING *`,
    values: [data.episode, data.comment, data.ipaddress, data.date],
  });
  