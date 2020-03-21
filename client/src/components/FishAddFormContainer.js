import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Button, Icon, Textarea, RadioGroup } from 'react-materialize';
import Input from "./Input";
import API from "../utils/API";

function FishAddFormContainer() {
  const { register, handleSubmit, errors } = useForm();
  const [imageLinkArr, setImageLinkArr] = useState([{ img: null, alt: null }]);
  const { type, setType } = useState('');
  const { reefSafe, setReefSafe } = useState('');
  const { communityFish, setCommunityFish } = useState('');
  const { aggroLevel, setAggroLevel } = useState('');

  const onSubmit = data => {
    console.log(data.type);
    data.aliases = data.aliases.split(",");
    data.images = imageLinkArr;
    console.log(data);
    API.createFish(data);
  }

  const handleAddImage = (e) => {
    e.preventDefault();
    const values = [...imageLinkArr];
    values.push({ img: null, alt: null });
    setImageLinkArr(values);
  }

  const handleImageChange = (e, index) => {
    const values = [...imageLinkArr];
    values[index].img = e.target.value;
    setImageLinkArr(values);
  }

  const handleImageAltChange = (e, index) => {
    const values = [...imageLinkArr];
    values[index].alt = e.target.value;
    setImageLinkArr(values);
  }

  const handleRemoveImage = (e, index) => {
    e.preventDefault();
    const values = imageLinkArr.filter((item, i) => i !== index);
    setImageLinkArr(values);
  }

  return (
    <Container>
      <form>
        {
          !imageLinkArr.length ?
            ""
            : (
              imageLinkArr.map((link, index) => {
                const txtlabel = `image_${index}`;
                return (
                  <>
                    <div key={index}>
                      <Input label="Image Link" name={`image_${index}`} value={link.img} onChange={(e) => handleImageChange(e, index)} inputRef={register({
                        required: true
                      })} />
                      {errors[txtlabel] && <span className="error-msg">This field is required</span>}

                      <Input label="Image Alt Text" name={`imagealt_${index}`} value={link.alt} onChange={(e) => handleImageAltChange(e, index)} inputRef={register({
                        required: true
                      })} />
                      {errors[txtlabel] && <span className="error-msg">This field is required</span>}

                    </div>
                    <Button onClick={(e) => handleRemoveImage(e, index)}>Remove</Button>
                  </>
                )
              })
            )
        }
        <Button onClick={(e) => handleAddImage(e)}>Add Image</Button>

        <Input label="Scientific Name" name="scientificName" inputRef={register({
          required: true
        })} />
        {errors.scientificName && <span className="error-msg">This field is required</span>}

        <Input label="Aliases" name="aliases" inputRef={register({
          required: true
        })} />
        {errors.aliases && <span className="error-msg">This field is required</span>}

        <Input label="Description" name="description" inputRef={register({
          required: true
        })} />
        {errors.description && <span className="error-msg">This field is required</span>}

        <Input type="number" label="Max Size(cm)" name="maxSizeCM" inputRef={register({
          required: true
        })} />
        {errors.maxSize && <span className="error-msg">This field is required</span>}

        <Input label="Life Span" name="lifespan" inputRef={register({
          required: true
        })} />
        {errors.lifeSpan && <span className="error-msg">This field is required</span>}

        <Input label="Diet" name="diet" inputRef={register({
          required: true
        })} />
        {errors.diet && <span className="error-msg">This field is required</span>}

        <Input type="number" label="Minimum Tank Size(L)" name="minTankSizeL" inputRef={register({
          required: true
        })} />
        {errors.tankSize && <span className="error-msg">This field is required</span>}

        <Input label="Temperature Range (C)" name="tempRangeC" inputRef={register({
          required: true
        })} />
        {errors.tempRange && <span className="error-msg">This field is required</span>}

        <br />

        Fish Type? -
        <Input className="with-gap" name="type" type="radio" value="Freshwater" label="Freshwater" inputRef={register({
          required: true
        })} />
        <Input className="with-gap" name="type" type="radio" value="Saltwater" label="Saltwater" inputRef={register({
          required: true
        })} />
        <Input className="with-gap" name="type" type="radio" value="Brackish" label="Brackish" inputRef={register({
          required: true
        })} />

        <br />
        <br />

        Community Fish? -
        <Input className="with-gap" name="communityFish" type="radio" value="true" label="True" onChange={() => setCommunityFish("True")} />
        <Input className="with-gap" name="communityFish" type="radio" value="false" label="False" onChange={() => setCommunityFish("False")} />

        <br />
        <br />

        Reef Safe? -
        <Input className="with-gap" name="reefSafe" type="radio" value="safe" label="Safe" onChange={() => setReefSafe("Safe")} />
        <Input className="with-gap" name="reefSafe" type="radio" value="not safe" label="Not Safe" onChange={() => setReefSafe("not safe")} />
        <Input className="with-gap" name="reefSafe" type="radio" value="not applicable" label="Not Applicable" onChange={() => setReefSafe("not applicable")} />

        <br />
        <br />

        Aggro Level? -
        <Input className="with-gap" name="aggroLevel" type="radio" value="Aggressive" label="Aggressive" onChange={() => setAggroLevel("Aggressive")} />
        <Input className="with-gap" name="aggroLevel" type="radio" value="Semi-Aggressive" label="Semi Aggressive" onChange={() => setAggroLevel("Semi-Aggressive")} />
        <Input className="with-gap" name="aggroLevel" type="radio" value="Peaceful" label="Peaceful" onChange={() => setAggroLevel("Peaceful")} />

        <br />

        <Textarea />

        <Button className="teal" type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
                    <Icon right>
            send
                    </Icon>
        </Button>
      </form>
    </Container>
  );
}

export default FishAddFormContainer;