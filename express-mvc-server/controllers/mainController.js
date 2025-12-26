// Home route
exports.home = (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Express MVC Server 🚀",
  });
};

// About route
exports.about = (req, res) => {
  res.json({
    success: true,
    message: "This server is built using Express.js and MVC pattern.",
  });
};

// Contact route
exports.contact = (req, res) => {
  res.json({
    success: true,
    message: "Contact us at: support@example.com",
  });
};

// Dynamic data route
exports.getTime = (req, res) => {
  res.json({
    success: true,
    time: new Date().toLocaleString(),
  });
};

// POST route - Echo JSON
exports.echoData = (req, res) => {
  const data = req.body;

  // Simple validation (BONUS)
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      success: false,
      message: "JSON body is required",
    });
  }

  res.json({
    success: true,
    receivedData: data,
  });
};
