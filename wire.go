package sentinel

import (
	"github.com/cosmos/cosmos-sdk/wire"
)

// Register concrete types on wire codec
func RegisterWire(cdc *wire.Codec) {
	cdc.RegisterConcrete(MsgRegisterVpnService{}, "sentinel/registervpn", nil)
	cdc.RegisterConcrete(MsgQueryRegisteredVpnService{}, "sentinel/queryvpnservice", nil)
	cdc.RegisterConcrete(MsgDeleteVpnUser{}, "sentienl/deletevpnservice", nil)
	cdc.RegisterConcrete(MsgRegisterMasterNode{}, "sentinel/masternoderegistration", nil)
	cdc.RegisterConcrete(MsgQueryFromMasterNode{}, "sentienl/querythevpnservice", nil)
	cdc.RegisterConcrete(MsgDeleteMasterNode{}, "sentinel/deletemasternode", nil)
}

var msgCdc = wire.NewCodec()

func init() {
	RegisterWire(msgCdc)
	wire.RegisterCrypto(msgCdc)
}
