export async function rootHandler(req, res) 
{
    return res.status(200).send({ sucess: true, message: "hello from server 👋!"})
}

export async function notFound(req, res) 
{
    return res.status(404).send({ sucess: false, message: "⚠️ Requested url cannot be found!"})
}