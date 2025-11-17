import { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

export default function DashboardModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Botón estilo tarjeta */}
      <Button
        onClick={handleOpen}
        sx={{
          background: "rgba(98, 54, 10, 0.72)",
          color: "rgba(207, 214, 218, 0.9)",
          borderRadius: "12px",
          padding: "10px 20px",
          boxShadow: "0 4px 10px rgba(65, 63, 63, 0.3)",
          "&:hover": {
            background: "rgba(10, 61, 98, 0.6)",
          },
        }}
      >
        Creditos
      </Button>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "rgba(98, 54, 10, 0.9)", // fondo estilo card
            color: "#fff",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            width: { xs: "90%", sm: 400 }, // responsivo
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            MaxDM
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Ve el codigo{" "}
            <a href="https://github.com/Maxd-m/dashboard_aws" target="_blank">
              aqui
            </a>
          </Typography>
          <Button
            onClick={handleClose}
            sx={{
              background: "rgba(207, 214, 218, 0.2)",
              color: "#fff",
              borderRadius: "12px",
              "&:hover": {
                background: "rgba(207, 214, 218, 0.4)",
              },
            }}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
