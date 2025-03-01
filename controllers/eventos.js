const EventoModels = require('../model/models');

exports.post = (req, res) => {
   EventoModels.createEvent(req).then(
        () => {
            res.status(200).send({ mensagem: "Produto cadastrado com sucesso" })
        },
        (erro) => {
            res.status(400).send({ mensagem: erro })
        }
    )
}
exports.getAll = (req, res) => {
    EventoModels.getAllEvents().then(
        (resultado) => {
            res.status(200).send({ Eventos: resultado.rows })
        },
        (erro) => {
            res.status(500).send({ erro: erro });
        }
    )
}
exports.get = (req, res) => {
    const id = req.params.id;
  EventoModels.getEventsById(id).then(
        (resultado) => {
            res.status(200).send({ Evento: resultado.rows });
        },
        (erro) => {
            res.status(400).send({ erro: erro });
        }
    )
}

