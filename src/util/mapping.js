import pokemon from "../component/profile/pokemon";

/// Rail ordering exp https://eu1-test-vms.disco-api.com/labs-ui/experiments/d7a1dc3e-523c-48c0-996c-3fc112ac0b55
/// thumbnail exp https://eu1-test-vms.disco-api.com/labs-ui/experiments/63bfdb6f-558a-4408-92a1-da849a69f6f6/dashboard

export const getExperimentTreatmentsForSegments= (expid) => {
     return fetch(`https://eu1-test.disco-api.com/labs/api/v1/debug/experiments/${expid}/treatments`)
        .then(response => response.json())
}
export const railOrderExp = "d7a1dc3e-523c-48c0-996c-3fc112ac0b55"
export const thumbnailExp = "63bfdb6f-558a-4408-92a1-da849a69f6f6"

const railOrderExpSegmentMapping = {
    "ash-charmander": "26c7182a-4027-41ef-9345-99fa932b88c0",
    "mario-bulbasaur": "076f2db0-8389-4303-ae63-68284e57724a",
    "ash-squirtle": "d5ddf1c3-5d05-41e6-bf8b-47a793dbbcb1",
    "mario-charmander": "64e639ff-c3b8-48f9-b860-90516652036c",
    "ash-bulbasaur": "6ad7b93b-bab3-4a33-8101-362bbf85b975",
    "mario-squirtle": "c4f055bc-25ed-455c-9972-9e93c1edb941"
}

const thumbnailExpSegmentMapping = {
    "ash-charmander": "4dc3c9ac-72b3-46b2-98d3-009819a5b59c",
    "mario-bulbasaur": "535e622d-c036-4ca6-80e4-2007f318375e",
    "ash-squirtle": "5897013f-5f1d-4816-989c-1272cac848dc",
    "mario-charmander": "5ae3e24b-70a4-4f5d-8aa0-3918099c8a43",
    "ash-bulbasaur": "9c132c0b-798a-4196-a0d2-ef4002416d5a",
    "mario-squirtle": "c89d6ecd-d70d-4aba-953f-8f46f0fc6ec5"
}

const rail1 = "3ed95645-0a85-4bd4-84ae-9bf7b453f935"
const rail2 = "cec903d9-5436-4100-8670-12c7365a7f99"
const rail3 = "f7031637-b1e2-4163-b669-789ed8884913"
const segmentMapping = {
    [railOrderExp]: railOrderExpSegmentMapping,
    [thumbnailExp]: thumbnailExpSegmentMapping
}
const getSegmentId = (experimentId, persona, pokemon) => {
    let segmentKey = `${persona}-${pokemon}`

    console.log(segmentMapping)
    console.log(experimentId)
    let expMapping = segmentMapping[experimentId]

    if(expMapping) {

        return expMapping[segmentKey]
    } else {
        return null
    }
}

export const getSegmentCounter = (expId, data, profile) => {
    let segmentId = getSegmentId(expId, profile.persona, profile.pokemon)

    console.log(data)
    console.log(segmentId)
    let treatment = {}
    if (segmentId) {
        data.map(x=> {
            if (x.segment_id === segmentId)
                treatment[x.treatment_id] =  {success: x.success, failure: x.total - x.success}
        })
    }

    return treatment
}