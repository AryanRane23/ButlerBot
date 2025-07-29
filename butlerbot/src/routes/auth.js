router.post("/verify", async (req, res) => {
  const { token } = req.body;
  try {
    const decoded = await firebaseAdmin.auth().verifyIdToken(token);
    res.status(200).json({ success: true, uid: decoded.uid, email: decoded.email });
  } catch (err) {
    console.error("Token verification failed:", err);
    res.status(401).json({ success: false, error: "Invalid token" });
  }
});
