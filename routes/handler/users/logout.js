const { User, RefreshToken }  = require('../../../models')

module.exports = async (req,res) => {
    const userId = req.body.user_id

    const user = await User.findByPk(userId)

    if (!userId) {
        return res.status(404).json({
            status: 'error',
            message: 'User not found'
        })
    }

    await RefreshToken.destroy({
        where: {
            user_id: userId
        }
    })

    return res.status(200).json({
        status: 'success',
        message: 'Refresh token delete'
    })
}