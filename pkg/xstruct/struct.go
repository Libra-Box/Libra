package xstruct

import "encoding/json"

func MapToStruct(mapV, structV interface{}) error {
	data, err := json.Marshal(mapV)
	if err != nil {
		return err
	}
	return json.Unmarshal(data, structV)
}
