import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BsStarFill, BsStar } from "react-icons/bs";
import {
  Input,
  OuterModal,
  InnerModal,
  BodyInput,
  Modal,
  Span,
  SpanClicked,
  EntryTitle,
  PrimaryButton,
} from "../Questions/Styles.jsx";
import AddStarRating from "./AddStarRating.jsx";

const ReviewForm = styled(InnerModal)`
  height: 500px;
  width: 750px;
  border-width: 2px 5px 5px 2px;
  overflow: auto;
`;

const WriteReviewForm = styled.div`
  font-family: "Poppins", sans-serif;
  height: 100%;
  width: 60%;
  margin: 2px auto;
`;

const Exit = styled.button`
  float: right;
`;

const ReviewBody = styled.textarea`
  width: 300px;
`;

const Warning = styled.span`
  color: #ab4a27;
`;

const Label = styled.label`
  display: block;
  font-size: 10px;
`;

const Radio = styled.div`
  display: inline-block;
  width: 15%;
  margin: 0 1%;
  text-align: center;
`;

const NewReviewModal = ({ closeModal, metaData, productId, productName }) => {
  let [reviewBody, setReviewBody] = useState("");
  let [summary, setSummary] = useState("");
  let [recommend, setRecommend] = useState();
  let [sizeSelection, setSize] = useState();
  let [fitSelection, setFit] = useState();
  let [comfortSelection, setComfort] = useState();
  let [widthSelection, setWidth] = useState();
  let [lengthSelection, setLength] = useState();
  let [qualitySelection, setQuality] = useState();
  let [reviewForm, setReviewForm] = useState({ product_id: productId });
  let [charForm, setCharForm] = useState({});

  let characteristics = metaData.characteristics;
  let availableCharacteristics = Object.keys(characteristics);

  const transferRating = (newRating) => {
    setReviewForm({ ...reviewForm, ["rating"]: Number(newRating) });
  };

  let formHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (value === "true") {
      setRecommend(value);
      value = true;
      console.log(value);
    }
    if (value === "false") {
      setRecommend(value);
      value = false;
      console.log(value);
    }

    setReviewForm({ ...reviewForm, [name]: value });

    if (name === "body") {
      setReviewBody(event.target.value);
    }
    if (name === "summary") {
      setSummary(event.target.value);
    }
  };

  let charHandler = (event) => {
    let name = event.target.name;
    let id = event.target.id;
    let value = event.target.value;

    switch (id.substring(0, id.length - 1)) {
      case "size":
        setSize(value);
        break;
      case "fit":
        setFit(value);
        break;
      case "length":
        setLength(value);
        break;
      case "width":
        setWidth(value);
        break;
      case "quality":
        setQuality(value);
        break;
      case "com":
        setComfort(value);
        break;
      default:
        break;
    }

    setCharForm({ ...charForm, [name]: Number(event.target.value) });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    let submittedForm = { ...reviewForm, characteristics: charForm };
    axios
      .post("/postReviews", submittedForm)
      .then(() => {
        alert("Submitted!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <OuterModal>
      <ReviewForm>
        <Exit value="CloseAddReview" onClick={closeModal}>
          X
        </Exit>
        <WriteReviewForm>
          <form onSubmit={handleSubmit}>
            <h2>Write You Review</h2>
            <h3>About the {productName}</h3>
            <Input
              type="email"
              name="email"
              label="email"
              placeholder="kjbnjken@gmail.com"
              onChange={formHandler}
              require
            />
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={formHandler}
              require
            />
            <div>
              <AddStarRating
                transferRating={transferRating}
                onChange={formHandler}
              />
            </div>
            <div>
              <h4>Recommend this product?</h4>
              <input
                type="radio"
                value="true"
                name="recommend"
                checked={recommend === "true"}
                onChange={formHandler}
              />
              recommended
              <input
                type="radio"
                value="false"
                name="recommend"
                checked={recommend === "false"}
                onChange={formHandler}
              />
              not recommended
            </div>
            <div className="characteristics">
              {availableCharacteristics.includes("Size") && (
                <div>
                  <h4>How was the sizing?</h4>
                  <div>
                    <Radio>
                      <input
                        type="radio"
                        value="1"
                        id="size1"
                        name={characteristics["Size"].id}
                        onChange={charHandler}
                        checked={sizeSelection === "1"}
                      />
                      <Label for="size1">1 size too small</Label>
                    </Radio>

                    <Radio>
                      <input
                        type="radio"
                        value="2"
                        id="size2"
                        name={characteristics["Size"].id}
                        onChange={charHandler}
                        checked={sizeSelection === "2"}
                      />
                      {sizeSelection === "2" && (
                        <Label for="size2">1/2 size too small</Label>
                      )}
                    </Radio>

                    <Radio>
                      <input
                        type="radio"
                        value="3"
                        id="size3"
                        name={characteristics["Size"].id}
                        onChange={charHandler}
                        checked={sizeSelection === "3"}
                      />
                      {sizeSelection === "3" && (
                        <Label for="size3">Perfect</Label>
                      )}
                    </Radio>
                    <Radio>
                      <input
                        type="radio"
                        value="4"
                        id="size4"
                        name={characteristics["Size"].id}
                        onChange={charHandler}
                        checked={sizeSelection === "4"}
                      />
                      {sizeSelection === "4" && (
                        <Label for="size4">1/2 size too big</Label>
                      )}
                    </Radio>
                    <Radio>
                      <input
                        type="radio"
                        value="5"
                        id="size5"
                        name={characteristics["Size"].id}
                        onChange={charHandler}
                        checked={sizeSelection === "5"}
                      />
                      <Label for="size5">1 size too small</Label>
                    </Radio>
                  </div>
                </div>
              )}
              {availableCharacteristics.includes("Width") && (
                <div>
                  <h4>How was the width?</h4>
                  <Radio>
                    <input
                      type="radio"
                      value="1"
                      id="width1"
                      name={characteristics["Width"].id}
                      label="too narrow"
                      onChange={charHandler}
                      checked={widthSelection === "1"}
                    />{" "}
                    <Label for="width1">too narrow</Label>
                  </Radio>
                  <Radio>
                    <input
                      type="radio"
                      value="2"
                      id="width2"
                      name={characteristics["Width"].id}
                      onChange={charHandler}
                      checked={widthSelection === "2"}
                    />
                  </Radio>
                  <Radio>
                    <input
                      type="radio"
                      value="3"
                      id="width3"
                      name={characteristics["Width"].id}
                      onChange={charHandler}
                      checked={widthSelection === "3"}
                    />
                  </Radio>

                  <input
                    type="radio"
                    value="4"
                    id="width4"
                    name={characteristics["Width"].id}
                    onChange={charHandler}
                    checked={widthSelection === "4"}
                  />
                  <Radio>
                    <input
                      type="radio"
                      value="5"
                      id="width5"
                      name={characteristics["Width"].id}
                      label="too wide"
                      onChange={charHandler}
                      checked={widthSelection === "5"}
                    />
                    <Label for="width4">too wide</Label>
                  </Radio>
                </div>
              )}
              {availableCharacteristics.includes("Comfort") && (
                <div>
                  <h4>How comfortable was this?</h4>
                  <Radio>
                    <input
                      type="radio"
                      value="1"
                      id="com1"
                      name={characteristics["Comfort"].id}
                      label="uncomfortable"
                      onChange={charHandler}
                      checked={comfortSelection === "1"}
                    />
                    <Label for="com1">uncomfortable</Label>
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="2"
                      id="com2"
                      name={characteristics["Comfort"].id}
                      onChange={charHandler}
                      checked={comfortSelection === "2"}
                    />
                    {comfortSelection === "2" && (
                      <Label for="com2">slightly uncomfortable</Label>
                    )}
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="3"
                      id="com3"
                      name={characteristics["Comfort"].id}
                      onChange={charHandler}
                      checked={comfortSelection === "3"}
                    />
                    {comfortSelection === "3" && <Label for="com3">ok</Label>}
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="4"
                      id="com4"
                      name={characteristics["Comfort"].id}
                      onChange={charHandler}
                      checked={comfortSelection === "4"}
                    />
                    {comfortSelection === "4" && (
                      <Label for="com4">comfortable</Label>
                    )}
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="5"
                      id="com5"
                      name={characteristics["Comfort"].id}
                      onChange={charHandler}
                      checked={comfortSelection === "5"}
                    />
                    <Label for="com5">perfect</Label>
                  </Radio>
                </div>
              )}
              {availableCharacteristics.includes("Quality") && (
                <div>
                  <h4>How was the quality?</h4>
                  <Radio>
                    <input
                      type="radio"
                      value="1"
                      id="quality1"
                      name={characteristics["Quality"].id}
                      label="poor"
                      onChange={charHandler}
                      checked={qualitySelection === "1"}
                    />
                    <Label for="quality1">poor</Label>
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="2"
                      id="quality2"
                      name={characteristics["Quality"].id}
                      onChange={charHandler}
                      checked={qualitySelection === "2"}
                    />
                    {qualitySelection === "2" && (
                      <Label for="quality2">below average</Label>
                    )}
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="3"
                      id="quality3"
                      name={characteristics["Quality"].id}
                      onChange={charHandler}
                      checked={qualitySelection === "3"}
                    />
                    {qualitySelection === "3" && (
                      <Label for="quality3">what I expected</Label>
                    )}
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="4"
                      id="quality4"
                      name={characteristics["Quality"].id}
                      onChange={charHandler}
                      checked={qualitySelection === "4"}
                    />
                    {qualitySelection === "4" && (
                      <Label for="quality4">pretty great</Label>
                    )}
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="5"
                      id="quality5"
                      name={characteristics["Quality"].id}
                      label="perfect"
                      onChange={charHandler}
                      checked={qualitySelection === "5"}
                    />
                    <Label for="quality5">Perfect</Label>
                  </Radio>
                </div>
              )}
              {availableCharacteristics.includes("Length") && (
                <div>
                  <h4>How was the length?</h4>

                  <Radio>
                    <input
                      type="radio"
                      value="1"
                      id="length1"
                      name={characteristics["Length"].id}
                      label="runs short"
                      onChange={charHandler}
                      checked={lengthSelection === "1"}
                    />
                    <Label for="lenth1">runs short</Label>
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="2"
                      id="length2"
                      name={characteristics["Length"].id}
                      onChange={charHandler}
                      checked={lengthSelection === "2"}
                    />
                    {lengthSelection === "2" && (
                      <Label for="length2">runs slightly short</Label>
                    )}
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="3"
                      id="length3"
                      name={characteristics["Length"].id}
                      onChange={charHandler}
                      checked={lengthSelection === "3"}
                    />
                    {lengthSelection === "3" && (
                      <Label for="length3">perfect</Label>
                    )}
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="4"
                      id="length4"
                      name={characteristics["Length"].id}
                      onChange={charHandler}
                      checked={lengthSelection === "4"}
                    />
                    {lengthSelection === "4" && (
                      <Label for="length4">runs slightly long</Label>
                    )}
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="5"
                      id="length5"
                      name={characteristics["Length"].id}
                      onChange={charHandler}
                      checked={lengthSelection === "5"}
                    />
                    <Label for="length5">runs long</Label>
                  </Radio>
                </div>
              )}
              {availableCharacteristics.includes("Fit") && (
                <div>
                  <h4>How was the fit?</h4>

                  <Radio>
                    <input
                      type="radio"
                      value="1"
                      id="fit1"
                      name={characteristics["Fit"].id}
                      label="runs short"
                      onChange={charHandler}
                      checked={fitSelection === "1"}
                    />
                    <Label for="fit1">runs tight</Label>
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="2"
                      id="fit2"
                      name={characteristics["Fit"].id}
                      onChange={charHandler}
                      checked={fitSelection === "2"}
                    />
                    {fitSelection === "2" && (
                      <Label for="fit2">runs slightly tight</Label>
                    )}
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="3"
                      id="fit3"
                      name={characteristics["Fit"].id}
                      onChange={charHandler}
                      checked={fitSelection === "3"}
                    />
                    {fitSelection === "3" && <Label for="fit3">perfect</Label>}
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="4"
                      id="fit1"
                      name={characteristics["Fit"].id}
                      onChange={charHandler}
                      checked={fitSelection === "4"}
                    />
                    {fitSelection === "4" && (
                      <Label for="fit4">runs slightly large</Label>
                    )}
                  </Radio>

                  <Radio>
                    <input
                      type="radio"
                      value="5"
                      id="fit5"
                      name={characteristics["Fit"].id}
                      label="runs long"
                      onChange={charHandler}
                      checked={fitSelection === "5"}
                    />
                    <Label for="fit5">runs large</Label>
                  </Radio>
                </div>
              )}
            </div>
            <h4>Review Summary</h4>
            <Input
              type="text"
              value={summary}
              name="summary"
              onChange={formHandler}
            />
            <div>
              <h4>Review Body</h4>
              <ReviewBody
                placeholder="Why did you like the product or not?"
                name="body"
                value={reviewBody}
                onChange={formHandler}
              />{" "}
              <br />
              {reviewBody.length < 50 ? (
                <Warning>{50 - reviewBody.length} More Chars Required</Warning>
              ) : (
                <span>Requirement Met</span>
              )}
            </div>
            <div>
              <h4>Submit Your Photos</h4>
              <Input
                name="photos"
                type="file"
                accept=".png, .jpeg, .gif"
                multiple
                onChange={formHandler}
              />
            </div>
            <div>
              <PrimaryButton type="submit">Submit</PrimaryButton>
            </div>
          </form>
        </WriteReviewForm>
      </ReviewForm>
    </OuterModal>
  );
};

export default NewReviewModal;
