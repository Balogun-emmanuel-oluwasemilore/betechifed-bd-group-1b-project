const validateTask = (req, res, next) => {
  const { title, status } = req.body;

  if (req.method === "POST" && (!title || title.trim() === "")) {
    return res.status(400).json({ success: false, message: "Title is required" });
  }

  if (status && !["pending", "completed"].includes(status)) {
    return res.status(400).json({ success: false, message: "Status must be 'pending' or 'completed'" });
  }

  next();
};

module.exports = validateTask;