const express = require('express');
const app = express();
const port = 5000;
app.use(express.json());
app.get('/convert/hexrgb/', (req, res) => {
    const hex = req.query.hex;
    if (!hex) {
        res.status(400).json({
            error: "Invalid hex code gg"
        });
    }
    const hexCode = hex.replace('#', '');
    if (hexCode.length !== 6) {
        res.status(400).json({
            error: "Invalid hex color code aa"
        });
    }
    const r = parseInt(hexCode.substring(0, 2), 16);
    const g = parseInt(hexCode.substring(2, 4), 16);
    const b = parseInt(hexCode.substring(4, 6), 16);
    res.json({
        rgb: {
            r,g,b
        },
         
    });
}
);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);
