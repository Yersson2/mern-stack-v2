const noteCtrl = {};

noteCtrl.getNotes = (req, res) => res.json({message: "note"});
noteCtrl.createNote = (req, res) => res.json({message: "note saved"});

noteCtrl.getNote = (req, res) => res.json({message: "note..."});
noteCtrl.updateNote = (req, res) => res.json({message: "note updated"});
noteCtrl.deleteNote = (req, res) => res.json({message: "note deleted"});


module.exports = noteCtrl;